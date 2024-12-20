<template>
  <div>
    <!-- header -->
    <div class="text-center">
      <h1>Colors</h1>
      <p class="text-lg font-medium">
        Find color palette inspiration by browsing through colors.
      </p>
    </div>

    <!-- palettes -->
    <div class="mt-8">
      <!-- loading skeletons -->
      <ul
        v-if="isFetching && !isRefetching"
        class="flex gap-2 flex-wrap"
      >
        <li
          v-for="index in 50"
          :key="index"
        >
          <USkeleton class="h-10 w-28 rounded-full" />
        </li>
      </ul>

      <!-- color links -->
      <ul
        v-else
        class="flex gap-2 flex-wrap"
      >
        <li
          v-for="(item, index) in data"
          :key="index"
        >
          <UButton
            :title="`${item} Color Palettes`"
            :label="item"
            :to="`/colors/${formatSlug(item)}`"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data, isFetching, isRefetching } = useColors();

useSeoMeta({
  title: 'Colors - ColorDrop',
  description: 'Find color palette inspiration by browsing through colors.'
});
</script>
