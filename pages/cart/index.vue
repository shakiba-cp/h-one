<template>
  <div>
    <TheBreadcrumb class="sm:hidden" :items="[
      {
        title: 'سبد خرید'
      }]" />
    <div class="container ">
      <div class="gap-5 flex  justify-between w-full">
        <div class="w-[70%] card">
          <div
            class="flex gap-2 justify-between items-center mb-4 pb-4 border-b last:border-none last:mb-0 last:pb-0 border-borderColor"
            v-for="item in [1, 2, 3]">
            <BaseImg src="/images/product.png" alt="product"
              class="w-[100px] h-[100px] rounded border border-borderColor" />
            <div class="flex justify-start flex-grow flex-col">
              <p class="text-h5 mb-3">شکت 21399</p>
              <BaseNumberIncrementor />
            </div>
            <div class="self-start">
              <div class="flex items-center gap-2">
                <div class="bg-lightSecondary p-2 rounded-sm">
                  رنگ : قهوه ای
                </div>
                <BaseButton soft size="sm">
                  <IconsTrash />
                </BaseButton>
              </div>
              <div class="text-left mt-2">
                <del>549,000</del>
                <p class="text-primary"><b>439,000</b>تومان</p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-[30%] card h-fit sticky top-1">
          <h1 class="text-h4 pb-3 border-b border-borderColor">فاکتور خرید شما</h1>
          <div class="flex flex-col gap-3 mt-4">
            <div class="flex justify-between gap-2">
              <p>مجموع سفارش</p>
              <p>549,000 تومان</p>
            </div>
            <div class="flex justify-between gap-2">
              <p>تخفیف</p>
              <p>110,000 تومان</p>
            </div>
            <div class="flex justify-between gap-2">
              <p>مبلغ پرداختی شما</p>
              <p>439,000 تومان</p>
            </div>
          </div>
          <BaseButton left-icon class="w-full mt-4">
            <template #icon>
              <IconsArrow width="24px" height="24px" />
            </template>
            ادامه فرایند خرید
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>