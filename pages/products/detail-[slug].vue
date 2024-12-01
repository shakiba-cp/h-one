<template>
   <div>
      <TheBreadcrumb :items="[{
         title: 'زنانه',
         to: '/products/women'
      },
      {
         title: 'بلوز/شومیز'
      }]" />
      <ProductSizeTable v-model="isOpenSizeModal" />

      <div class="container">
         <div class="card flex sm:flex-col justify-between gap-2">
            <div class="w-[45%] sm:w-full"></div>
            <div class="w-[55%] sm:w-full">
               <h1 class="text-h2">شومیز طرح ساگازا 22055</h1>
               <nuxt-link to="/products/test" class="text-muted">بلوز/شومیز</nuxt-link>
               <BaseAlert color="secondary">
                  با توجه به تفاوت رنگ در صفحه نمایش و واقعیت، ممکن است رنگ محصولات تا ۲۰٪ متغیر باشد
               </BaseAlert>
               <div class="mt-4 flex-grow flex gap-3">
                  <div class="w-[70px]">
                     <div class="color-selection ">
                        <div class="bg-white  rounded-t flex justify-center items-center px-4 py-3">
                           <IconsCheck color="white" />
                        </div>
                        <div class="bg-lightSecondary rounded-b text-center px-2 py-1">
                           سفید
                        </div>
                     </div>
                  </div>
                  <div class="w-[70px]">
                     <div class="color-selection active">
                        <div class="bg-red-600 rounded-t flex justify-center items-center px-4 py-3">
                           <IconsCheck color="white" />
                        </div>
                        <div class="bg-lightSecondary rounded-b text-center px-2 py-1">
                           قرمز
                        </div>
                     </div>
                  </div>
                  <div class="w-[70px]">
                     <div class="color-selection ">
                        <div class="bg-blue-700 rounded-t flex justify-center items-center px-4 py-3">
                           <IconsCheck color="white" />
                        </div>
                        <div class="bg-lightSecondary rounded-b text-center px-2 py-1">
                           آبی
                        </div>
                     </div>
                  </div>
               </div>
               <div class="flex flex-col items-end mt-5 ">
                  <div
                     class="fixed w-full left-0 items-center bottom-[4.45rem] border-b border-secondary z-10 justify-between hidden sm:flex bg-white shadow py-3 px-3">
                     <BaseButton>افزودن به سبد خرید</BaseButton>
                     <p class="text-primary  text-h4">749,000 تومان</p>
                  </div>
                  <p class="text-primary text-h3 sm:hidden">749,000 تومان</p>
                  <div class="flex gap-2 sm:w-full">
                     <BaseButton class="sm:w-full" @click="isOpenSizeModal = true" color="secondary">
                        <template #icon>
                           <IconsRuler />
                        </template>
                        جدول سایزبندی
                     </BaseButton>
                     <BaseButton class="sm:!hidden">
                        <template #icon>
                           <IconsBasket />
                        </template>
                        افزودن به سبد خرید
                     </BaseButton>

                  </div>
               </div>
            </div>

         </div>
      </div>
   </div>
</template>
<script setup lang="ts">
const isOpenSizeModal = ref(false);
</script>
<style scoped lang="scss">
.color-selection {
   @apply border rounded border-secondary cursor-pointer;

   svg {
      opacity: 0;
      transition: all ease .3s;
   }

   &.active {
      @apply border-primary;

      div {
         &:first-child {
            position: relative;

            &::after {
               content: " ";
               background: rgba(70, 70, 70, 0.162);
               top: 0;
               right: 0;
               position: absolute;
               width: 100%;
               height: 100%;
               @apply rounded-t;
            }
         }
      }

      svg {
         opacity: 1;
         z-index: 2;
      }
   }
}
</style>