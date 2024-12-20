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
      <HomeLatestMens :section-title="item.name" :slides="item.products" />

    </template>
    <!-- <HomeBlogsSection :blog-items="blogs" key="4" /> -->
  </div>
</template>

<script lang="ts" setup>
import type { HomePageDto } from "~/models/HomePageDto";

const { data } = await useAsyncData("home", () => CustomFetch<HomePageDto>("/shop/main-page"));
definePageMeta({
  title: "صفحه اصلی"
})
</script>

<style></style>
