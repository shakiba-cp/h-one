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
    <nuxt-link to="#" class="post">
      <div class="post-image">
        <img :src="imageSrc" alt="Blog Image" />
        <span class="post-image-category desktop-only">{{ category }}</span>
      </div>
      <div class="post-body">
        <h3 class="!text-[1rem] font-bold">{{ title }}</h3>
        <div class="flex justify-end items-center gap-2 text-muted text-h7">
          <IconsCalendar width="22px" height="22px" />
          {{ date }}
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<style scoped>
.post {
  width: 100%;
  background: #fff;
  padding: 1rem;
  display: block;
  @apply rounded;
}

.post h3 {
  transition: color 0.15s ease-out;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  overflow: hidden;
}

.post:hover h3 {
  @apply text-primary;


}

.post-image {
  position: relative;
  overflow: hidden;
  width: 100%;
  border-radius: var(--border-radius);

  z-index: 0;
}

.post-image img {
  width: 100%;
  transition: transform 0.5s ease-out;
  /*aspect-ratio: 272/192;*/
}

.post-image-category {
  position: absolute;
  top: 0;
  left: 0;
  background: var(--color-primary);
  padding: 0.75rem 1.75rem;
  z-index: 2;
  border-bottom-right-radius: var(--border-radius);
}

.post-body h3 {
  font-size: 1.2rem;
  line-height: 2rem;
  margin: 0;
}

.post-body p {
  margin: 0;
  margin-top: 1rem;
}

.post-body {
  padding-top: 1rem;
}

.post:hover .post-image img {
  transform: scale(1.1);
}
</style>
