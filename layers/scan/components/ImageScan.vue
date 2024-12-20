<template>
  <div class="flex flex-col items-center">
    <div
      class="border-2 border-dashed border-gray-400 p-5 w-full max-w-sm text-center cursor-pointer"
      @drop.prevent="handleDrop"
      @dragover.prevent
      @click="triggerFileInput"
    >
      <span
        v-if="!imageData"
        class="text-gray-500"
      >Drag & Drop an Image Here</span>
      <img
        v-if="imageData"
        ref="imageElement"
        :src="imageData"
        alt="Image Preview"
        class="mt-2 w-full object-cover"
      >
      <input
        ref="fileInput"
        type="file"
        hidden
        @change="handleFileChange"
      >
    </div>

    <!-- dominant colors -->
    <div
      v-if="dominantColors.length"
      class="flex flex-wrap gap-2 mt-5"
    >
      <div
        v-for="(color, index) in dominantColors"
        :key="index"
        :style="{ backgroundColor: color }"
        class="w-16 h-16 flex justify-center items-center text-white text-xs rounded-md"
      >
        <span>{{ color }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-expect-error no types!
import ColorThief from 'colorthief';

const imageData = ref<string | null>(null);
const dominantColors = ref<string[]>([]);

const fileInput = ref<HTMLInputElement>();

function triggerFileInput(): void {
  fileInput.value?.click();
}

function handleFileChange(e: Event): void {
  const input = e.target as HTMLInputElement;
  const file = input.files?.[0];
  if (file !== undefined) {
    const reader = new FileReader();
    reader.onload = (event) => {
      imageData.value = event.target?.result as string;
      extractDominantColors(imageData.value);
    };
    reader.readAsDataURL(file);
  }
}

function handleDrop(event: DragEvent): void {
  const file = event.dataTransfer?.files[0];
  if (file !== undefined) {
    const reader = new FileReader();
    reader.onload = (event) => {
      imageData.value = event.target?.result as string;
      extractDominantColors(imageData.value);
    };
    reader.readAsDataURL(file);
  }
}

function extractDominantColors(imageSrc: string): void {
  const img = new Image();
  img.src = imageSrc;
  img.onload = () => {
    const colorThief = new ColorThief();
    const palette = colorThief.getPalette(img, 5);
    dominantColors.value = palette.map(
      (rgb: any) => rgbToHex({ r: rgb[0], g: rgb[1], b: rgb[2] })
    );
  };
}
</script>
