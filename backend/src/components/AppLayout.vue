<template>
  <div v-if="currentUser" class="min-h-full bg-gray-200 flex">
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
    <div v-else class="min-h-full bg-gray-600 flex items-center justify-center">
        <Spinner />
    </div>
    <Toast />
</template>

<script setup>
import {ref, computed, onMounted, onUnmounted} from 'vue'
import Sidebar from "./Sidebar.vue";
import Navbar from "./Navbar.vue";
import store from "../store";
import Spinner from "./core/Spinner.vue";
import Toast from "./core/Toast.vue";

const {title} = defineProps({
  title: String
})
const sidebarOpened = ref(true);

const currentUser = computed(() => store.state.user.data);
function toggleSidebar() {
  sidebarOpened.value = !sidebarOpened.value
}

function updateSidebarState() {
  sidebarOpened.value = window.outerWidth > 768;
}

onMounted(() => {
    store.dispatch('getCurrentUser')
    store.dispatch('getCountries')
    updateSidebarState();
    window.addEventListener('resize', updateSidebarState)
})

onUnmounted(() => {
    window.removeEventListener('resize', updateSidebarState)
})

</script>

<style scoped>

</style>
