<template>
  <div>
    <!-- header -->
    <div class="text-center">
      <h1>About</h1>
    </div>

    <div class="text-lg font-medium max-w-xl mx-auto space-y-4">
      <p>ColorDrop is color palette tool built for creatives to help get inspiration for designs or projects they're working on.</p>
      <p>Every day at midnight we drop a new color palette that's generated automatically using AI.</p>
      <p>
        Color Palettes can be liked which will save them to your <NuxtLink to="/palette/liked">
          liked
        </NuxtLink> tab so you can check back on them later.
      </p>
      <p>
        <!-- eslint-disable-next-line -->
        ColorDrop was built in 2015 by <NuxtLink to="https://triss.dev/" target="_blank" class="underline">Tristan White</NuxtLink>
        <!-- eslint-disable-next-line -->
        as a fun side project, then in 2024 sold to <NuxtLink class="underline" to="https://timb.com">Tim B</NuxtLink> who re-built 
        <!-- eslint-disable-next-line -->
        it and plans on adding more features over time. Read more about <NuxtLink class="underline" to="https://triss.dev/blog/saying-goodbye-to-colordrop/">Tristan saying goodbye to colordrop</NuxtLink>.
      </p>
      <p>
        Tim is also the owner of some other color related tools:
        <!-- eslint-disable-next-line -->
        <NuxtLink class="underline" to="https://colormagic.app">color magic</NuxtLink>, 
        <!-- eslint-disable-next-line -->
        <NuxtLink class="underline" to="https://randomcolor.com">random color</NuxtLink>, 
        <!-- eslint-disable-next-line -->
        <NuxtLink class="underline" to="https://rgbhexcode.com">rgb hex code</NuxtLink>, and
        <!-- eslint-disable-next-line -->
        <NuxtLink class="underline" to="https://colorwheel.co">color wheel</NuxtLink>.
      </p>
      <p>
        ColorDrop is completely free to use and open source. The code is
        <!-- eslint-disable-next-line -->
        available to view on <NuxtLink class="underline" to="https://github.com/timb-103">GitHub</NuxtLink>.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">

useSeoMeta({
  title: 'About - ColorDrop',
  description: 'Discover a new color palette drop every day. Browse 10 years of daily color palette drops to inspire your next design or project.'
});
</script>
