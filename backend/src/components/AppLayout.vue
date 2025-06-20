<template>
  <div  class="min-h-full bg-gray-200 flex">
    <!--    Sidebar-->
    <Sidebar :class="{'-ml-[180px]': !sidebarOpened}"/>
    <!--/    Sidebar-->

    <div class="flex-1 flex-col w-full transition-all">
      <Navbar @toggle-sidebar="toggleSidebar"></Navbar>
      <!--      Content-->
      <main class="p-6">
          <div class="p-4 bg-white rounded-lg shadow-md mb-6">
              <router-view></router-view>

          </div>

      </main>
      <!--      Content-->
    </div>
  </div>


</template>

<script setup>
import {ref, computed, onMounted, onUnmounted} from 'vue'
import Sidebar from "./Sidebar.vue";
import Navbar from "./Navbar.vue";
import store from "../store";


const {title} = defineProps({
  title: String
})
const sidebarOpened = ref(true);


function toggleSidebar() {
  sidebarOpened.value = !sidebarOpened.value
}

function updateSidebarState() {
  sidebarOpened.value = window.outerWidth > 768;
}

onUnmounted(() => {
  window.removeEventListener('resize', updateSidebarState)
})

</script>

<style scoped>

</style>
