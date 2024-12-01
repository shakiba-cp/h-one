<script setup>
defineProps({
  blogItems: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="py-3 border-t border-borderColor">
    <div class="flex flex-col gap-3 justify-center items-center">
      <h3 class="text-h3 sm:text-h4">
        <a href="https://ibolak.com/article"> بلاگ آی‌بولک</a>
      </h3>
      <IconsDots />
    </div>
    <div class="blog-section-body">
      <div class="grid grid-cols-12 gap-3">
        <BlogCard v-for="(item, index) in blogItems" :key="index" :imageSrc="item.imageSrc" :title="item.title"
          :date="item.date" :category="item.category" :link="item.link" />
      </div>
    </div>
  </section>
</template>
