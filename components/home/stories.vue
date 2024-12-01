<template>
  <div class="flex overflow-x-auto gap-3 bg-white p-2 mt-4 rounded">
    <div class="text-center" v-for="item in [1, 2, 3]" :key="item">
      <img src="/images/product.png" class="rounded-full border border-borderColor w-[80px] h-[80px]" alt="test" />
      <p class="mt-1">ترنچ کت</p>
    </div>
    <div class="text-center">
      <img src="/iamges/avatars/1.svg" class="rounded-full border border-borderColor w-[80px] h-[80px]" alt="test" />
      <p class="mt-1">ترنچ کت</p>
    </div>
    <div class="text-center" v-for="item in [1, 2, 3]" :key="item">
      <img src="/iamges/avatars/1.svg" class="rounded-full border border-borderColor w-[80px] h-[80px]" alt="test" />
      <p class="mt-1">ترنچ کت</p>
    </div>
    <div class="text-center" v-for="item in [1, 2, 3]" :key="item">
      <img src="/images/product.png" class="rounded-full border border-borderColor w-[80px] h-[80px]" alt="test" />
      <p class="mt-1">ترنچ کت</p>
    </div>
    <div class="text-center" v-for="item in [1, 2, 3]" :key="item">
      <img src="/iamges/avatars/1.svg" class="rounded-full border border-borderColor w-[80px] h-[80px]" alt="test" />
      <p class="mt-1">ترنچ کت</p>
    </div>
    <div class="text-center" v-for="item in [1, 2, 3]" :key="item">
      <img src="/images/product.png" class="rounded-full border border-borderColor w-[80px] h-[80px]" alt="test" />
      <p class="mt-1">ترنچ کت</p>
    </div>
    <div class="text-center">
      <img src="/iamges/avatars/1.svg" class="rounded-full border border-borderColor w-[80px] h-[80px]" alt="test" />
      <p class="mt-1">ترنچ کت</p>
    </div>
    <div class="text-center" v-for="item in [1, 2, 3]" :key="item">
      <img src="/images/product.png" class="rounded-full border border-borderColor w-[80px] h-[80px]" alt="test" />
      <p class="mt-1">ترنچ کت</p>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
div.text-center{
  min-width: fit-content;
  flex-grow: 1;
}
</style>