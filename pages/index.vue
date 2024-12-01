<template>
  <div class="container max-w-[95%] mx-auto space-y-[1.5rem]">
    <HomeStories />
    <BaseCarousel class="single-slider rounded" :autoplay="{
      delay: 2000,
      pauseOnMouseEnter: true
    }" :items-to-show="1" :items="['1', '2']" :modules="[SwiperNavigation,SwiperAutoplay]" :navigation="{
      enabled: true
    }">
      <template #item="{ item }">
        <img :src="item % 2 == 0 ? 'https://ibolak.com/storage/image/2024/9/1727084589-vflx1QbmPB7NLLSZ.webp' :
          'https://ibolak.com/storage/image/2024/11/optimized/1732089674-6irzwjC5S4NzFEHw.webp'"
          class="rounded sm:h-[170px] h-[350px] object-cover w-full" />
      </template>
    </BaseCarousel>
    
    <HomeBanners :banners="banners" />
    <HomeLatestMens section-title="جدیدترین‌ها" :slides="(products)" key="3" />
    <HomeLatestMens section-title="کت‌ها" :slides="products" key="4" />
    <HomeLatestMens section-title="کیف‌ها" :slides="products" key="4" />
    <HomeLatestMens section-title="جدیدترین‌های مردانه" :slides="products" key="4" />
    <HomeBlogsSection :blog-items="blogs" key="4" />
  </div>
</template>

<script lang="ts" setup>
import DATABASE from "@/assets/DATABASE.json";

const products = DATABASE["products"] as [];
const stories = DATABASE["stories"] as [];
const banners = DATABASE["banners"] as [];
const blogs = DATABASE["blogs"] as [];
definePageMeta({
  title: "صفحه اصلی"
})
</script>

<style></style>
