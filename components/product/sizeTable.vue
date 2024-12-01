<template>
  <BaseModal size="xl" body-class="!pt-0" title="جدول سایز بندی محصول" v-model="isOpenModal">
    <BaseAlert color="primary">
      با توجه به تفاوت رنگ در صفحه نمایش و واقعیت، ممکن است رنگ محصولات تا ۲۰٪ متغیر باشد
    </BaseAlert>
    <div class="flex rounded-sm py-2 justify-between">
      <div class="flex flex-col gap-3 flex-grow">
        <p class="header">سایز</p>
        <b>SM</b>
        <b>XL</b>
        <b>2XL</b>
        <b>3XL</b>
      </div>
      <div class="flex flex-col gap-3 flex-grow">
        <p class="header"> دور سینه </p>
        <p>96cm</p>
        <p>96cm</p>
        <p>96cm</p>
        <p>96cm</p>
      </div>
      <div class="flex flex-col gap-3 flex-grow">
        <p class="header w-full"> دور بازو </p>
        <p>36cm</p>
        <p>36cm</p>
        <p>36cm</p>
        <p>36cm</p>
      </div>
      <div class="flex flex-col gap-3 flex-grow">
        <p class="header">قد آستین</p>
        <p>62cm</p>
        <p>62cm</p>
        <p>62cm</p>
        <p>62cm</p>
      </div>
      <div class="flex flex-col gap-3 flex-grow">
        <p class="header">قد لباس</p>
        <p>72cm</p>
        <p>72cm</p>
        <p>72cm</p>
        <p>72cm</p>
      </div>
    </div>
  </BaseModal>
</template>

<script lang="ts" setup>
const isOpenModal = defineModel({
  type: Boolean,
  default: false
})
</script>

<style scoped lang="scss">
.header {
  @apply bg-lightSecondary w-full py-4;
}

p,
b {
  @apply px-3;
}
</style>