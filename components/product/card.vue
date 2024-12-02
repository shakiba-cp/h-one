<template>
  <nuxt-link to="/products/detail-slug" class="product">
    <div class="product-image">
      <div class="product-image-meta">
        <span class="product-like" data-type="30" data-id="l83w5">
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M15.8743 4C19.0493 4 21.1783 6.98 21.1783 9.755C21.1783 15.388 12.3393 20 12.1783 20C12.0173 20 3.17834 15.388 3.17834 9.755C3.17834 6.98 5.30734 4 8.48234 4C10.2973 4 11.4893 4.905 12.1783 5.711C12.8673 4.905 14.0593 4 15.8743 4Z"
              stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>
      </div>
      <base-img :src="props.imageSrc" :alt="props.imageAlt" />
      <div class="product-image-gallery">
        <div class="product-image-gallery-item" v-for="(image, i) in $props.imageGallery" :key="i">
          <img :src="image.imageSrc" :alt="image.imageAlt" />
        </div>
      </div>
    </div>
    <div class="product-body w-full flex justify-between">
      <div class="product-body-right">
        <div class="d-flex align-items-center product-categories">
          <span>{{ props.category }}/{{ props.parentCategory }}</span>
        </div>
        <strong class="product-title">{{ props.title }}</strong>
      </div>
      <div class="product-body-left items-end flex flex-col">
        <strong class="text-primary persian-number">{{ props.price }}</strong>
        <small class="text-muted">تومان</small>
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
<style scoped lang="scss">
.product-title {
  font-size: 1.1rem;
}

.product-image {
  position: relative;
}

.product-image-meta {
  position: absolute;
  top: 1rem;
  right: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}


.product-like {
  margin-right: 1rem;
  background: var(--lighter-color);
  border-radius: 8px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.15s ease-out;
  will-change: transform;
}

.product:hover .product-like {
  opacity: 1;
}

.product-image {
  background: #fff;
  border-radius: var(--border-radius);
  display: flex;
  width: 100%;
  aspect-ratio: 9/12;
  align-items: center;
  justify-content: center;
  /* padding:2rem; */
  overflow: hidden;
  margin-bottom: 1rem;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease-out;
  will-change: transform;
  z-index: 0;
}

.product:hover .product-image>img {
  transform: scale(1.08);
}

.product {
  display: block;
}

.product-image-gallery {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
  transform: translateY(4px);
  opacity: 0;
  transition: all 0.15s ease-out;
}

.product:hover .product-image-gallery {
  transform: translateY(0);
  opacity: 1;
}

.product-image-gallery-item {
  width: 60px;
  max-width: 30%;
  aspect-ratio: 1/1;
  flex: none;
  /* height:60px; */
  border-radius: calc(var(--border-radius) / 2);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border-color);
}

.category-page .product-image-gallery {
  gap: 0.5rem !important;
  padding-bottom: 0.5rem !important;
}

.product-image-gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-like:hover {
  transform: scale(1.1);
}


.product.horizontal {
  display: flex;
  background: #fff;
  gap: 1rem;
  padding: 1rem;
  border-radius: var(--border-radius);

  .product-image {
    width: 120px;
    flex: none;
    margin-bottom: 0;
  }

  .product-body {
    flex-direction: column;
    width: 100%;
    position: relative;

  }

  .product-body-left {
    width: 100%;
    text-align: left;
    display: block;
  }

  .product-body-left strong {
    display: inline;
    margin-left: 0.25rem;
  }

  .product-body-left span:first-child {
    display: block;
    width: fit-content;
    margin-right: auto;
  }

  .product-image-gallery {
    display: none !important;
  }


}
</style>
