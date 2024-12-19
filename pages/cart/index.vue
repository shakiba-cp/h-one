<template>
  <div>
    <TheBreadcrumb class="sm:hidden" :items="[
      {
        title: 'سبد خرید'
      }]" />
    <div class="container ">
      <div class="gap-5 flex md:flex-wrap pt-2 justify-between w-full">
        <div class="w-[70%] h-fit card md:w-full">
          <template v-if="utilStore.shopCartLoading">
            <div v-for="item in [1, 2, 3]" class="mb-1" :key="item">
              <BaseSkeletonLoaidng />
            </div>
          </template>
          <template v-for="item in utilStore.shopCartItems" :key="item.id">
            <CartItem :item="item" />
          </template>
        </div>
        <div class="w-[30%] md:w-full card h-fit sticky top-1">
          <h1 class="text-h4 pb-3 border-b border-borderColor">فاکتور خرید شما</h1>
          <div class="flex flex-col gap-3" v-if="utilStore.shopCartLoading">
            <BaseSkeletonLoaidng height="10px" />
            <BaseSkeletonLoaidng height="10px" />
            <BaseSkeletonLoaidng height="10px" />
            <BaseSkeletonLoaidng height="55px" />
          </div>
          <div class="flex flex-col gap-3 mt-4" v-else>
            <div class="flex justify-between gap-2">
              <p>مجموع سفارش</p>
              <p>{{ utilStore.getShopCartTotalPrice.toLocaleString() }} تومان</p>
            </div>
            <div class="flex justify-between gap-2">
              <p>تخفیف</p>
              <p>{{ utilStore.getShopCartDiscount.toLocaleString() }} تومان</p>
            </div>
            <div class="flex justify-between gap-2">
              <p>مبلغ پرداختی شما</p>
              <p>{{ (utilStore.getShopCartTotalPrice - utilStore.getShopCartDiscount).toLocaleString() }} تومان</p>
            </div>
            <BaseButton to="/cart/checkout" left-icon class="w-full mt-1">
              <template #icon>
                <IconsArrow width="24px" height="24px" />
              </template>
              ادامه فرایند خرید
            </BaseButton>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  title: "سبد خرید"
});
const utilStore = useUtilStore();
</script>

<style></style>