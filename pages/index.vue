<template>
  <div class="container max-w-[95%] mx-auto space-y-[1.5rem]">
    <HomeStories :data="data?.data.stories ?? []" />
    <BaseCarousel class="single-slider rounded" :autoplay="{
      delay: 2000,
      pauseOnMouseEnter: true
    }" :items-to-show="1" :items="data?.data.slidersData ?? []" :modules="[SwiperNavigation, SwiperAutoplay]"
      :navigation="{
        enabled: true
      }">
      <template #item="{ item }">
        <BaseImg :src="`shop/${item.source}`" :alt="item.title"
          class="rounded sm:h-[170px] h-[350px] object-cover w-full" />
      </template>
    </BaseCarousel>

    <HomeBanners :banners="data?.data.cardsData!" />
    <template v-for="item in data?.data.categories" :key="item.title">
      <HomeLatestMens :section-title="item.title" :slides="item.products" />

    </template>
    <HomeBlogsSection :blog-items="blogs" key="4" />
  </div>
</template>

<script lang="ts" setup>
import DATABASE from "@/assets/DATABASE.json";
import type { HomePageDto } from "~/models/HomePageDto";

const products = DATABASE["products"] as [];
const stories = DATABASE["stories"] as [];
const banners = DATABASE["banners"] as [];
const blogs = DATABASE["blogs"] as [];
const { data } = await useAsyncData("home", () => CustomFetch<HomePageDto>("/shop/main-page"));
console.log(data.value?.data);
definePageMeta({
  title: "صفحه اصلی"
})
</script>

<style></style>
