<template>
  <header class="flex justify-between items-center p-3 h-14 shadow bg-white">
    <button @click="emit('toggle-sidebar')"
            class="flex items-center justify-center rounded transition-colors w-8 h-8 text-gray-700 hover:bg-black/10">
      <Bars3Icon class="w-6"/>
    </button>


      <Popover class="relative inline-block text-left">
          <PopoverButton class="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
              <img src="https://randomuser.me/api/portraits/men/1.jpg" class="rounded-full w-8 mr-2">
              <ChevronDownIcon class="size-5" aria-hidden="true" />
          </PopoverButton>

          <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel class="absolute left-1/2 z-10 mt-5 flex max-w-max -translate-x-10/12 transform space-y-6 px-4 w-80">
                  <div class="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 shadow-lg ring-1 ring-gray-900/5">
                      <div class="p-4">
                          <!-- Item 1 -->
                          <div class="group relative flex items-center gap-x-6 rounded-lg p-2 hover:bg-indigo-600">
                              <div class="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                  <UserCircleIcon class="size-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                              </div>
                              <div>
                                  <a href="/dashboard" class="font-semibold text-gray-900 group-hover:text-white">
                                      Profile
                                      <span class="absolute inset-0" />
                                  </a>
                              </div>
                          </div>

                          <!-- Item 2 -->
                          <div class="group relative flex items-center gap-x-6 rounded-lg p-2 hover:bg-indigo-600">
                              <div class="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:text-indigo-600">
                                  <ArrowLeftStartOnRectangleIcon class="size-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                              </div>
                              <div>
                                  <a href="#" @click="logout" class="font-semibold text-gray-900 group-hover:text-white">
                                      Logout
                                      <span class="absolute inset-0" />
                                  </a>
                              </div>
                          </div>


                      </div>
                  </div>
              </PopoverPanel>
          </transition>
      </Popover>

  </header>
</template>

<script setup>
import {ArrowLongLeftIcon, Bars3Icon  , UserCircleIcon,ArrowLeftStartOnRectangleIcon} from '@heroicons/vue/24/solid'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import {ChevronDownIcon} from '@heroicons/vue/24/solid'
import {ArrowPathIcon, ChartPieIcon, CursorArrowRaysIcon, FingerPrintIcon, SquaresPlusIcon} from '@heroicons/vue/24/solid'

import store from "../store";
import router from "../router";
import {computed} from "vue";

const emit = defineEmits(['toggle-sidebar'])

function logout() {
    store.dispatch('logout')
        .then(() => {
            router.push({name: 'login'})
        })
}
</script>

<style scoped>

</style>
