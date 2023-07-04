<script setup>
import { onMounted } from 'vue';
import { initTheme } from '@/composables/theme.js';

onMounted(() => {
  initTheme();
});
</script>

<template>
  <div class="flex cursor-pointer">
    <div>
      <h3>图</h3>
      <router-link
        to="/canvans/grid"
        class="cursor-pointer"
      >
        网格线
      </router-link>
    </div>
  </div>
</template>

<style>
body {
  @apply dark:bg-gray-900 dark:text-gray-50;
}
</style>
