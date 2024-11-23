<script setup>
defineProps({
  banners: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="grid grid-cols-4 gap-4">
    <div v-for="(banner, index) in banners" :key="index" class="banner">
      <img :src="banner.imageSrc" :alt="`Banner ${index + 1}`" />
    </div>
  </div>
</template>
