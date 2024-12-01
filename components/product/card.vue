<template>
  <nuxt-link
    to="/products/detail-slug"
    class="product"
  >
    <div class="product-image">
      <div class="product-image-meta">
        <span class="product-like" data-type="30" data-id="l83w5">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.8743 4C19.0493 4 21.1783 6.98 21.1783 9.755C21.1783 15.388 12.3393 20 12.1783 20C12.0173 20 3.17834 15.388 3.17834 9.755C3.17834 6.98 5.30734 4 8.48234 4C10.2973 4 11.4893 4.905 12.1783 5.711C12.8673 4.905 14.0593 4 15.8743 4Z"
              stroke="#323232"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </div>
      <img :src="props.imageSrc" :alt="props.imageAlt" />
      <div class="product-image-gallery">
        <div
          class="product-image-gallery-item"
          v-for="(image, i) in $props.imageGallery"
          :key="i"
        >
          <img :src="image.imageSrc" :alt="image.imageAlt" />
        </div>
      </div>
    </div>
    <div class="product-body d-flex justify-content-between">
      <div class="product-body-right">
        <div class="d-flex align-items-center product-categories">
          <span>{{ props.category }}/{{ props.parentCategory }}</span>
        </div>
        <strong class="product-title">{{ props.title }}</strong>
      </div>
      <div class="product-body-left">
        <strong class="text-primary persian-number">{{ props.price }}</strong>
        <span class="text-muted">تومان</span>
        <div class="product-discount horizontal persian-number">
          {{ props.discountPercent }} درصد
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script setup>
const props = defineProps([
  "imageSrc",
  "imageAlt",
  "imageGallery",
  "title",
  "price",
  "discountPercent",
  "category",
  "parentCategory",
]);
</script>
