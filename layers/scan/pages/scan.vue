<template>
  <div>
    <!-- header -->
    <div class="text-center">
      <h1>Scan Image</h1>
      <p>Extract the most dominant colors from any image.</p>
    </div>

    <div class="mt-8">
      <ImageScan />
    </div>
  </div>
</template>

<script setup lang="ts">

useSeoMeta({
  title: 'Scan Image - ColorDrop',
  description: 'Extract the most dominant colors from any image. Free to use, works in the browser, no images saved to our servers.'
});
</script>
