<template>
  <div>
    <div class="gallary items-center flex gap-2 sm:flex-col-reverse" v-if="data.length > 0">
      <div class="flex flex-col sm:flex-row gap-2 justify-between">
        <div @click="isOpenModal = true" v-for="(item, index) in [...props.data]" :key="index"
          class="border cursor-pointer rounded border-borderColor p-2" :class="{ 'more': index == 3 }">
          <BaseImg width="150px" height="150px" class="item " fit="contain" :src="`shop/${item.sourece}`" alt="1" />
          <IconsMoreHoriz v-if="index == 3" />
        </div>
      </div>
      <BaseImg @click="isOpenModal = true" width="500px" :alt="data[0].title"
        class="main sm:!w-full border border-secondary rounded" :src="`shop/${data[0].sourece}`" />
    </div>
    <div v-else></div>
    <BaseModal modal-class="min-w-[968px] md:!min-w-[unset]" v-model="isOpenModal" title="گالری تصاویر">
      <div class="flex gap-2 sm:flex-wrap">
        <div class="w-[40%] sm:w-full">
          <BaseCarousel @swiper="onSwiper" :items="props.data" :modules="[SwiperNavigation]" :navigation="{
            enabled: true
          }">
            <template #item="{ item }">
              <BaseImg width="400px" height="600px" fit="contain" :alt="item!.title"
                class="h-[500px] sm:h-auto sm:!w-full border border-secondary rounded" :src="`shop/${item!.sourece}`" />
            </template>
          </BaseCarousel>
        </div>
        <div class="w-[50%] gallary sm:w-full">
          <div class="flex flex-wrap gap-2 ">
            <div @click="changeImage(index)" v-for="(item, index) in [...props.data]" :key="index"
              class="border cursor-pointer w-fit rounded border-borderColor p-2">
              <BaseImg width="150px" height="150px" class="item " fit="contain" :src="`shop/${item.sourece}`" alt="1" />
            </div>
          </div>
        </div>
      </div>
    </BaseModal>
  </div>
</template>

<script lang="ts" setup>
import type { ProductImage } from '~/models/Product';
const isOpenModal = ref(false);
const props = defineProps<{
  data: ProductImage[]
}>();
const swiper: Ref<any> = ref(null);
const changeImage = (index: number) => {
  swiper.value.slideTo(index);
}
const onSwiper = (s: any) => {
  if (s) {
    swiper.value = s;
  }
}
</script>

<style scoped lang="scss">
.gallary {
  .main {
    width: 80%;
    object-fit: contain;
    aspect-ratio: 1;
    cursor: pointer;
  }

  .item {
    @apply w-[100px] md:h-[70px] rounded-sm h-[90px] sm:w-[70px];
  }

  .more {
    @apply relative items-center justify-center flex;

    &::after {
      content: " ";
      @apply absolute w-full h-full top-0 z-[2] right-0;
      backdrop-filter: blur(3px);
      background: rgba(255, 255, 255, 0.643)
    }

    svg {
      @apply absolute z-10;
    }
  }

  .cursor-pointer {
    transition: all ease .2s;

    &:hover {
      opacity: .8;
    }
  }
}
</style>