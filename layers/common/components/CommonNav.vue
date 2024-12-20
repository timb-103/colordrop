<template>
  <nav class="py-2 px-4 flex items-center justify-between flex-wrap gap-2">
    <NuxtLink
      to="/"
      class="flex items-center"
    >
      <img
        src="/public/logo.png"
        width="120px"
        height="auto"
      >
    </NuxtLink>

    <div>
      <ul class="flex gap-2 items-center">
        <li>
          <NuxtLink
            to="/"
            active-class="text-primary"
            class="underline"
          >
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/colors"
            active-class="text-primary"
            class="underline"
          >
            Colors
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/palette/liked"
            active-class="text-primary"
            class="underline"
          >
            Liked
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/scan"
            active-class="text-primary"
            class="underline"
          >
            Scan
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/about"
            active-class="text-primary"
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
