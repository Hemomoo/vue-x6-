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
      <h3>画布</h3>
      <router-link
        to="/canvas/grid"
        class="cursor-pointer"
      >
        网格线
      </router-link>
      <router-link
        to="/canvas/background"
        class="cursor-pointer"
      >
        背景
      </router-link>
      <router-link
        to="/canvas/graphMove"
        class="cursor-pointer"
      >
        图移动
      </router-link>

      <router-link
        to="/canvas/graphZoom"
        class="cursor-pointer"
      >
        图缩放
      </router-link>
    </div>
  </div>
</template>

<style>
body {
  @apply dark:bg-gray-900 dark:text-gray-50;
}
</style>
