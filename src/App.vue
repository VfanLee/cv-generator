<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isAppLoading = ref(true)

onMounted(() => {
  window.addEventListener('load', () => {
    isAppLoading.value = false
  })
})
</script>

<template>
  <LoadingSpinner v-if="isAppLoading" />

  <router-view v-slot="{ Component }">
    <Transition name="fade">
      <component :is="Component" v-show="!isAppLoading" />
    </Transition>
  </router-view>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
