<template>
  <div class=" relative" v-show="slides.length > 0">
    <client-only>
      <swiper :slides-per-view="1" :space-between="0" :loop="true" :modules="modules" :navigation="{
        enabled: true,
        prevEl: `#swiper-${uniqueId}-button-prev`,
        nextEl: `#swiper-${uniqueId}-button-next`,
      }" class="latest-swiper" pagination>
        <swiper-slide v-for="(slide, i) in slides" :key="i">
          <a :href="slide.link" target="_blank">
            <picture>
              <source :media="slide.media" :srcset="slide.imageSrc" />
              <img class="w-full" :src="slide.imageSrc" :alt="slide.alt" />
            </picture>
          </a>
        </swiper-slide>
      </swiper>
      <span :id="`swiper-${uniqueId}-button-next`" class="swiper-button-prev flex items-center justify-center">
        <img src="/icons/gallery-arrow-right.svg" alt="Next" />
      </span>
      <span :id="`swiper-${uniqueId}-button-prev`" class="swiper-button-next flex items-center justify-center">
        <img src="/icons/gallery-arrow-left.svg" alt="Previous" />
      </span>
    </client-only>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    slides: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      modules: [Navigation, Pagination],
      uniqueId: useId(), // Unique identifier for navigation buttons
    };
  },
};
</script>

<!-- <script setup>

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

const modules = [Navigation];

</script> -->

<style>
.v-skeleton-loader__image {
  height: 100% !important;
}
</style>
