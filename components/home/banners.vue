<script setup lang="ts">
import type { Banner } from '~/models/Banner';

defineProps<{
  banners: Banner[]
}>();
</script>

<template>
  <div class="grid grid-cols-4 gap-4 ">
    <nuxt-link target="_blank" :to="banner.link" v-for="(banner, index) in banners" :key="index" class="banner">
      <BaseImg :src="`shop/${banner.source}`" :alt="banner.title" />
    </nuxt-link>
  </div>
</template>
