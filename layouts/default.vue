<template>
  <!-- add padding at bottom for floating button -->
  <div>
    <NuxtLoadingIndicator color="#5576ff" />

    <CommonNav />

    <!-- content -->
    <main>
      <div class="max-w-6xl mx-auto px-4 py-8">
        <slot />
      </div>
    </main>

    <CommonFooter />

    <!-- global notifications -->
    <UNotifications>
      <template #description="{ description }">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <span v-html="description" />
      </template>
    </UNotifications>
  </div>
</template>

<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core';

onMounted(() => {
  /** @description hack to always set to light mode until we add dark mode properly */
  const colorMode = useLocalStorage('nuxt-color-mode', 'light');
  colorMode.value = 'light';
  document.documentElement.classList.remove('dark');
});
</script>
