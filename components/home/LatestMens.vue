<template>
  <div class="flex flex-col gap-5" v-show="items.length > 0">
    <div class="products-section-header flex justify-between items-stretch">
      <div class="products-section-header-right flex items-center">
        <img src="https://ibolak.com/assets/icons/dots.svg" alt="Dots before" />
        <h3 class="mr-5 text-[27px]">
          {{ sectionTitle }}
        </h3>
      </div>
      <BaseButton :outline="true" color="secondary"> مشاهده همه </BaseButton>
    </div>
    <div class="relative">
      <client-only>
        <swiper
          :slides-per-view="6"
          :space-between="10"
          :modules="modules"
          :navigation="{
            enabled: true,
            prevEl: `#swiper-${uniqueId}-prev`,
            nextEl: `#swiper-${uniqueId}-next`,
          }"
          pagination
        >
          <swiper-slide v-for="(item, index) in items" :key="index" class="px-3">
            <ProductCard
              :imageSrc="item.imageSrc"
              :title="item.title"
              :price="item.price"
              :discountPercent="item.discountPercent"
              :category="item.category"
              :parent-category="item.parentCategory"
              :image-gallery="item.imageGallery"
            />
          </swiper-slide>
        </swiper>
        <span
          :id="`swiper-${uniqueId}-prev`"
          class="swiper-button-prev custom-swiper-button-prev flex items-center justify-center"
        >
          <img src="/icons/gallery-arrow-right.svg" alt="Previous" />
        </span>
        <span
          :id="`swiper-${uniqueId}-next`"
          class="swiper-button-next custom-swiper-button-next flex items-center justify-center"
        >
          <img src="/icons/gallery-arrow-left.svg" alt="Next" />
        </span>
      </client-only>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import type { IProductData } from "@/types/ProductModel";

import "swiper/css";

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    sectionTitle: {
      type: String,
      default: "",
    },
    slides: {
      type: Array as () => IProductData[], // Proper TypeScript typing for props
      default: () => [],
    },
  },
  data() {
    return {
      items: this.slides, // Use the `slides` prop directly
      uniqueId: useId()
    };
  },
  setup() {
    const modules = [Navigation, Pagination];
    return {
      modules,
    };
  },
});
</script>
