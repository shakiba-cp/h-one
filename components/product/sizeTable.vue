<template>
  <BaseModal size="xl" body-class="!pt-0" title="جدول سایز بندی محصول" v-model="isOpenModal">
    <div class="flex rounded-sm py-2 justify-between">
      <div class="flex flex-col gap-3 flex-grow" v-for="item in Object.keys(data)">
        <p class="header" v-if="item=='size'">سایز</p>
        <p class="header" v-else>{{ item }}</p>
        <b v-for="detail in data[item]">{{ detail }}</b>
      </div>
     
    </div>
  </BaseModal>
</template>

<script lang="ts" setup>
const isOpenModal = defineModel({
  type: Boolean,
  default: false
});
defineProps<{
  data:any
}>();
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