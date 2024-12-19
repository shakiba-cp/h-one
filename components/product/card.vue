<template>
  <nuxt-link :to="`/products/detail-${item.id}`" class="product">
    <label v-if="item.off_percent != '0'"
      class="absolute top-5 left-0 rounded-r-full text-white bg-primary z-10 py-1 px-3">{{ item.off_percent }}
      درصد</label>
    <div class="product-image">
      <base-img width="250px" height="400px" fit="contain" :src="`shop/${item.images[0].source}`"
        :alt="item.images[0].title" />
      <div class="product-image-gallery">
        <div class="product-image-gallery-item" v-for="(image, i) in [...item.images].splice(1)" :key="i">
          <BaseImg width="80px" :src="`shop/${image.source}`" :alt="image.title" />
        </div>
      </div>
    </div>
    <div class="product-body w-full flex justify-between">
      <div class="product-body-right">
        <div class="d-flex align-items-center product-categories">
          <span>{{ item.categories[0].name }}</span>
        </div>
        <strong class="product-title">{{ item.name }}</strong>
      </div>
      <div class="product-body-left items-end flex flex-col">
        <small v-if="item.off_percent != '0'"><del class=" persian-number">{{ Number(item.price).toLocaleString()
            }}</del></small>
        <strong class="text-primary persian-number">{{ totalPrice() }}</strong>
        <small class="text-muted">تومان</small>
      </div>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
import type { ProductItem } from '~/models/Banner';


const props = defineProps<{
  item: ProductItem
}>();
const totalPrice = () => {
  var offPercent = +props.item.off_percent;
  if (offPercent == 0) {
    return (+props.item.price).toLocaleString();
  }
  var discount = (+props.item.price * offPercent / 100)
  return (+props.item.price - discount).toLocaleString();
}
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
  aspect-ratio: 1.1;
  transition: transform 0.5s ease-out;
  will-change: transform;
  z-index: 0;
}

.product:hover .product-image>img {
  transform: scale(1.08);
}

.product {
  display: block;
  position: relative;
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
  object-fit: contain;
  aspect-ratio: 1;
}

.product-like:hover {
  transform: scale(1.1);
}


.product.horizontal {
  @apply bg-cardBg;
  display: flex;
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
