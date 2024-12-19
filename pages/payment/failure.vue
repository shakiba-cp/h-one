<template>
  <div class="container">
    <div class="w-1/2 mx-auto sm:w-full">
      <BaseAlert color="red" class="text-center">
        پرداخت ناموفق بود، درصورتی که پرداخت شما انجام شده است ولی سفارش شما ثبت نشده است با پشتیبانی تماس بگیرید
      </BaseAlert>
      <BaseButton to="/cart/checkout">پرداخت مجدد</BaseButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  title: "پرداخت ناموفق"
})
</script>

<style></style>