<template>
  <div>
    <!-- header -->
    <div class="text-center">
      <h1>{{ capitalizedQuery }} Color Palettes</h1>
      <p class="text-lg font-medium">
        Browse through {{ searchQuery }} color palettes for design inspiration.
      </p>
    </div>

    <!-- palettes -->
    <div
      v-if="searchQuery !== undefined"
      class="mt-8"
    >
      <PalettesList
        :tags="[]"
        :query="searchQuery"
      />
    </div>
    <div
      v-else
      class="text-center mt-8"
    >
      <p class="text-sm italic">
        No {{ searchQuery }} color palettes found. Guess you have to get extra creative then?
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { params } = useRoute();
const query = ref(typeof params.color === 'string' ? params.color : undefined);

const searchQuery = ref(query.value?.replace(/-/g, ' '));
const capitalizedQuery = capitalizeWords(query.value?.replace(/-/g, ' ') ?? '');

useSeoMeta({
  title: `${capitalizedQuery} Color Palettes - ColorDrop`,
  description: `Browse through ${searchQuery.value} color palettes for design inspiration.`
});
</script>
