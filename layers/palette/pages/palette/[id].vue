<template>
  <div>
    <!-- loading skeletons -->
    <div
      v-if="data === undefined"
      class="text-center"
    >
      <USkeleton class="rounded-full h-10 w-28 mx-auto" />
      <USkeleton class="h-10 w-60 mt-8 mx-auto" />
      <USkeleton class="h-4 w-full max-w-xl mx-auto mt-4" />
      <USkeleton class="h-4 w-full max-w-xl mx-auto mt-2" />
    </div>

    <!-- palette -->
    <div v-else>
      <!-- header -->
      <div class="text-center">
        <!-- like button-->
        <PaletteLikeButton
          :id="data.id"
          :likes-count="data.likesCount"
          size="xl"
        />
        <!-- title -->
        <h1 class="mt-8">
          {{ data.name }}
        </h1>
        <!-- description -->
        <p class="font-medium max-w-xl mx-auto">
          {{ data.description }}
        </p>
      </div>

      <!-- colors -->
      <div class="overflow-hidden my-4 rounded-xl border border-gray-200 divide-x">
        <ul class="flex">
          <li
            v-for="(item, index) in data.colors"
            :key="index"
            class="w-full relative"
          >
            <div
              :style="{ background: item.hex }"
              class="w-full h-48 relative"
            >
              <!-- name -->
              <PaletteNameBadge
                :name="ntc.name(item.hex)[1].toString()"
                class="bottom-1 left-1 absolute"
              />
            </div>
          </li>
        </ul>

        <!-- color codes -->
        <ul class="hidden sm:flex divide-x">
          <li
            v-for="(item, index) in data.colors"
            :key="index"
            class="w-full relative"
          >
            <div class="py-2">
              <PaletteColorCopyButtons :hex="item.hex" />
            </div>
          </li>
        </ul>
      </div>

      <!-- mobile colors list -->
      <ul
        class="sm:hidden flex flex-col mb-2 divide-y"
      >
        <li
          v-for="(item, index) in data.colors"
          :key="index"
          class="w-full items-center flex gap-2 py-1"
        >
          <!-- color button -->
          <div
            :style="{ background: item.hex }"
            class="w-6 h-6 rounded-full relative"
          />

          <!-- copy color buttons -->
          <PaletteColorCopyButtons :hex="item.hex" />
        </li>
      </ul>

      <!-- color links -->
      <div class="mt-16">
        <div class="text-center">
          <h2>Tags</h2>
        </div>
        <ul class="flex gap-2 flex-wrap justify-center">
          <li
            v-for="(item, index) in [...data.tags, ...data.colors.map(v => v.name)]"
            :key="index"
          >
            <UButton
              class="capitalize"
              :label="item"
              :title="`${item} Color Palettes`"
              :to="`/colors/${item.toLowerCase().replace(/\s/g, '-')}`"
            />
          </li>
        </ul>
      </div>

      <!-- similar palettes -->
      <div class="mt-16">
        <div class="text-center">
          <h2>Similar Color Palettes</h2>
        </div>

        <PalettesList
          :tags="data.tags"
          :limit="24"
          is-pagination-hidden
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PaletteColorCopyButtons from '../../components/PaletteColorCopyButtons.vue';
import ntc from '../../utils/ntc.util';

const { params } = useRoute();
const id = ref(typeof params.id === 'string' ? params.id : undefined);

const { data, suspense } = usePalette(id);

await suspense();

useSeoMeta({
  title: `${data.value?.name} Color Palette - ColorDrop`,
  description: data.value?.description
});
</script>
