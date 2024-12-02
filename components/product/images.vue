<template>
  <div class="gallary items-center flex gap-2 sm:flex-col-reverse">
    <div class="flex flex-col sm:flex-row gap-2 justify-between">
      <div v-for="item in [1, 2, 3]" :key="item" class="border cursor-pointer rounded border-borderColor p-2">
        <BaseImg width="150px" class="item " fit="fill" :src="`/images/banners/${item}.webp`" alt="1" />
      </div>
      <div class="border cursor-pointer relative more rounded border-borderColor p-2">
        <BaseImg width="150px" class="item" fit="fill" :src="`/images/banners/1.webp`" alt="1" />
        <IconsMoreHoriz />
      </div>
    </div>
    <BaseImg alt="product" class="main sm:!w-full border border-secondary rounded"
      src="https://ibolak.com/storage/image/2024/12/optimized/1733133433-QAhvt9W5q2TKiZ4K.webp" />
  </div>
</template>

<script lang="ts" setup>

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