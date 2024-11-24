<template>
  <div class="container max-w-[95%] mx-auto space-y-[1.5rem]">
    <div class="flex flex-nowrap flex- overflow-x-auto max-w-full gap-5">
      <CategoriesCard :stories="stories" />
    </div>
    <HomeLatestProducts :slides="[]" key="2" />
    <HomeBanners :banners="banners" />
    <HomeLatestMens section-title="جدیدترین‌ها" :slides="products" key="3" />
    <HomeLatestMens section-title="کت‌ها" :slides="products" key="4" />
    <HomeLatestMens section-title="کیف‌ها" :slides="products" key="4" />
    <HomeLatestMens section-title="جدیدترین‌های مردانه" :slides="products" key="4" />
    <HomeBlogsSection :blog-items="blogs" key="4" />
  </div>
</template>

<script lang="ts" setup>
import DATABASE from "@/assets/DATABASE.json";

const products = DATABASE["products"];
const stories = DATABASE["stories"];
const banners = DATABASE["banners"];
const blogs = DATABASE["blogs"];
definePageMeta({
  title: "صفحه اصلی"
})
// console.log(products);
</script>

<style></style>
