<template>
  <UButton
    :to="`/palette/${palette.id}`"
    class="relative grid"
    :ui="{
      rounded: 'rounded-xl'
    }"
    variant="ghost"
    :title="palette.name"
    truncate
  >
    <!-- name badge -->
    <p class="text-xs truncate max-w-[90%] mb-1 ml-1">
      {{ palette.name }}
    </p>

    <!-- color palette -->
    <div class="grid grid-cols-4 rounded-xl overflow-hidden h-36 w-full">
      <div
        v-for="(item, index) in palette.colors"
        :key="index"
        :style="{backgroundColor: item.hex}"
        class="h-full w-full"
      />
    </div>

    <!-- footer -->
    <div class="flex gap-1 items-center justify-between w-full">
      <!-- like button-->
      <PaletteLikeButton
        :id="palette.id"
        :likes-count="palette.likesCount"
        variant="ghost"
        size="xs"
      />

      <!-- created at date -->
      <time class=" text-xs text-gray-500">{{ formatDistanceToNowStrict(palette.createdAt) }}</time>
    </div>
  </UButton>
</template>

<script setup lang="ts">
import { formatDistanceToNowStrict } from 'date-fns';
import type { PaletteModel } from '../models/palette.model';

export interface Props {
  palette: PaletteModel
}

defineProps<Props>();
</script>
