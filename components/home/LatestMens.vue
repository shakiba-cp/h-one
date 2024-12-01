<template>
  <div class="flex flex-col gap-5 my-12" v-if="items.length > 0">
    <div class="flex justify-between items-stretch">
      <div class="flex gap-5 sm:gap-3 items-center">
        <IconsDots class="sm:w-[28px]"/>
        <h3 class=" text-h3 md:text-h4">
          {{ sectionTitle }}
        </h3>
      </div>
      <BaseButton class="sm:border-none sm:!p-0 sm:!text-primary" :outline="true" color="secondary"> مشاهده همه </BaseButton>
    </div>
    <div class="relative sm:w-[109%] sm:-right-[4.1%] sm:px-r">
      <BaseCarousel :breakpoints="breakpoints" :items="items" :space-between="10" :modules="[SwiperNavigation]"
        :navigation="{
          enabled: true,
        }">
        <template #item="{ item }">
          <ProductCard :imageSrc="item.imageSrc" :title="item.title" :price="item.price"
            :discountPercent="item.discountPercent" :category="item.category" :parent-category="item.parentCategory"
            :image-gallery="item.imageGallery" />
        </template>
      </BaseCarousel>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IProductData } from "@/types/ProductModel";
const breakpoints = ref({
  1200: {
    slidesPerView: 6,
  },
  1090: {
    slidesPerView: 5,
  },
  768: {
    slidesPerView: 4,
  },
  576: {
    slidesPerView: 3.5,
  },
  480: {
    slidesPerView: 3.5,
  },
  0: {
    slidesPerView: 2.1,
  },
});
const { sectionTitle, slides } = defineProps<{
  sectionTitle: string;
  slides: []
}>();

const items = slides;
</script>
