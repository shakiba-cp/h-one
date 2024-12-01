<script setup>
defineProps({
  blogItems: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="blog-section my-3">
    <div class="blog-section-header flex flex-col justify-center items-center">
      <h3><a href="https://ibolak.com/article"> بلاگ آی‌بولک</a></h3>
      <img src="/icons/dots.svg" alt="Dots Icon" />
    </div>
    <div class="blog-section-body">
      <div class="grid grid-cols-12 gap-3">
        <BlogCard
          v-for="(item, index) in blogItems"
          :key="index"
          :imageSrc="item.imageSrc"
          :title="item.title"
          :date="item.date"
          :category="item.category"
          :link="item.link"
        />
      </div>
    </div>
  </section>
</template>
