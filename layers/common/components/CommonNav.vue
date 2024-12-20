<template>
  <nav class="py-2 px-4 flex items-center justify-between flex-wrap gap-2">
    <NuxtLink
      to="/"
      class="flex items-center"
      title="Home"
      aria-label="Home"
    >
      <img
        src="/public/logo.png"
        width="120px"
        height="24px"
        alt="Color Palettes Inspiration"
      >
    </NuxtLink>

    <div>
      <ul class="flex gap-2 items-center text-sm font-medium">
        <li>
          <NuxtLink
            to="/"
            active-class="text-primary-600"
            class="underline"
          >
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/colors"
            active-class="text-primary-600"
            class="underline"
          >
            Colors
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/palette/liked"
            active-class="text-primary-600"
            class="underline"
          >
            Liked
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/scan"
            active-class="text-primary-600"
            class="underline"
          >
            Scan
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/about"
            active-class="text-primary-600"
            class="underline"
          >
            About
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>
