<script setup>
defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="md:col-span-6 col-span-3 pb-4">
    <a :href="link" target="_self" class="post">
      <div class="post-image">
        <img :src="imageSrc" alt="Blog Image" />
        <span class="post-image-category desktop-only">{{ category }}</span>
      </div>
      <div class="post-body">
        <h3 class="!text-[1rem] font-bold">{{ title }}</h3>
        <p class="flex justify-end text-muted text-[0.9rem]">
          <img src="/icons/calendar.svg" alt="Calendar icon" class="ms-2" />
          {{ date }}
        </p>
      </div>
    </a>
  </div>
</template>

<style scoped>
/* Optional styles for customization */
</style>
