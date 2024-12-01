<script setup>
defineProps({
  banners: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="grid grid-cols-4 gap-4 ">
    <nuxt-link to="/products" v-for="(banner, index) in banners" :key="index" class="banner">
      <img :src="banner.imageSrc" :alt="`Banner ${index + 1}`" />
    </nuxt-link>
  </div>
</template>
