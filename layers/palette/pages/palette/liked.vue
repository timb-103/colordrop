<template>
  <div>
    <!-- header -->
    <div class="text-center">
      <h1>Liked</h1>
      <p class="text-lg font-medium">
        Find the color palettes you've liked.
      </p>
    </div>

    <!-- palettes -->
    <div
      v-if="ids.length > 0"
      class="mt-8"
    >
      <PalettesList
        :tags="[]"
        :ids="ids"
      />
    </div>
    <div
      v-else
      class="text-center mt-8"
    >
      <p class="text-sm italic">
        You haven't liked any palettes yet. What are you waiting for?
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { StorageSerializers, useLocalStorage } from '@vueuse/core';

const session = useLocalStorage<string>('likeColors', '', {
  serializer: StorageSerializers.string
});

const ids = computed(() => session.value.split(',').filter(v => v !== ''));

useSeoMeta({
  title: 'Liked - ColorDrop',
  description: 'Find the color palettes you\'ve liked.'
});
</script>
