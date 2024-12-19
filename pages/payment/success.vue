<template>
  <div class="container">
    <div class="w-1/2 mx-auto sm:w-full">
      <BaseAlert color="green" class="text-center">
        سفارش شما با موفقیت ثبت شد برای پیگیری سفارش به بخش
        <NuxtLink class="!text-primary inline-block font-bold hover:scale-105 transition-all" to="/panel/order">سفارشات
          من</NuxtLink>
        مراجعه
        کنید
      </BaseAlert>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  title: "پرداخت موفق"
})
</script>

<style></style>