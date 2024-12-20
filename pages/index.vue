<template>
  <div>
    <!-- header -->
    <div class="text-center">
      <h1>Daily Color Palettes Inspiration</h1>
      <p class="text-lg font-medium">
        Discover a new color palette drop every day.
      </p>

      <!-- search input -->
      <div class="max-w-xl mx-auto mt-8">
        <UButtonGroup
          size="lg"
          class="w-full"
        >
          <UInput
            v-model="query"
            placeholder="Search color palettes"
            class="w-full"
            @keyup.enter="search()"
          />
          <UButton
            color="primary"
            icon="i-heroicons-arrow-right"
            @click="search()"
          />
        </UButtonGroup>
      </div>
    </div>

    <!-- palettes -->
    <div class="mt-8">
      <PalettesList
        :tags="[]"
        :query="searchQuery"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const query = ref('');
const searchQuery = ref();

function search(): void {
  void navigateTo(`/colors/${formatSlug(query.value)}`);
}

useSeoMeta({
  title: 'Daily Color Palettes Inspiration - ColorDrop',
  description: 'Discover a new color palette drop every day. Browse 10 years of daily color palette drops to inspire your next design or project.'
});
</script>
