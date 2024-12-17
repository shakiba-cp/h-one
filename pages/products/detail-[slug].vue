<template>
   <div>
      <BaseAlert class="hidden sm:flex !my-0 text-h7 !rounded-none" color="secondary">
         با توجه به تفاوت رنگ در صفحه نمایش و واقعیت، ممکن است رنگ محصولات تا ۲۰٪ متغیر باشد
      </BaseAlert>
      <TheBreadcrumb class="sm:hidden" :items="[{
         title: 'زنانه',
         to: '/products/women'
      },
      {
         title: title
      }]" />
      <ProductSizeTable v-model="isOpenSizeModal" />

      <div class="container">
         <div class="card flex sm:flex-col justify-between gap-6">
            <div class="w-[45%] sm:w-full">
               <ProductImages />
            </div>
            <div class="w-[55%] sm:w-full">
               <h1 class="text-h2 sm:text-h4">شومیز طرح ساگازا 22055</h1>
               <nuxt-link to="/products/test" class="text-muted">بلوز/شومیز</nuxt-link>
               <BaseAlert color="secondary" class="sm:hidden">
                  با توجه به تفاوت رنگ در صفحه نمایش و واقعیت، ممکن است رنگ محصولات تا ۲۰٪ متغیر باشد
               </BaseAlert>
               <h6 class="mt-5 text-h5 font-bold">رنگ : </h6>
               <div class="mt-4 flex-grow flex gap-3 ">
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
                     <div class="color-selection ">
                        <div class="bg-red-600 rounded-t flex justify-center items-center px-4 py-3">
                           <IconsCheck color="white" />
                        </div>
                        <div class="bg-lightSecondary rounded-b text-center px-2 py-1">
                           قرمز
                        </div>
                     </div>
                  </div>
                  <div class="w-[70px]">
                     <div class="color-selection active">
                        <div class="bg-blue-700 rounded-t flex justify-center items-center px-4 py-3">
                           <IconsCheck color="white" />
                        </div>
                        <div class="bg-lightSecondary rounded-b text-center px-2 py-1">
                           آبی
                        </div>
                     </div>
                  </div>
               </div>

               <h6 class="mt-8 text-h5 font-bold">سایز (حروفی) : </h6>
               <div class="mt-4 flex-grow flex gap-3 ">
                  <label :for="item" v-for="item in ['M', 'L', 'XL']" :key="item" class="px-4 py-3 border 
                  border-secondary cursor-pointer
                  rounded-sm size " :class="{ 'active': item == 'M' }">
                     <BaseCheckBox name="size" :input-id="item" :value="item" type="radio" :label="item" />
                  </label>
               </div>
               <div class="flex flex-col items-end mt-5 ">
                  <div
                     class="fixed w-full left-0 items-center bottom-[4.45rem] border-b 
                     border-secondary z-10 justify-between hidden sm:flex bg-cardBg shadow py-3 px-3">
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
         <div class="flex   tabs items-center gap-4">
            <button @click="selectedTab = 0" :class="{ 'active': selectedTab == 0 }">مشخصات محصول</button>
            <button @click="selectedTab = 1" :class="{ 'active': selectedTab == 1 }">
               دیدگاه کاربران</button>
         </div>
         <div class=" card" v-if="selectedTab == 0">
            <table class="table table-striped mb-5">
               <tbody>
                  <tr>
                     <td>مدل یقه</td>
                     <td>
                        ایستاده
                     </td>
                  </tr>

                  <tr>
                     <td>مدل آستین</td>
                     <td>
                        بلند
                     </td>
                  </tr>

                  <tr>
                     <td>تنخور</td>
                     <td>
                        نرمال
                     </td>
                  </tr>

                  <tr>
                     <td>جنس</td>
                     <td>
                        غواصی
                     </td>
                  </tr>

                  <tr>
                     <td>موارد استفاده</td>
                     <td>
                        اسپرت
                     </td>
                  </tr>

                  <tr>
                     <td>فصل مناسب</td>
                     <td>
                        چهار فصل
                     </td>
                  </tr>
               </tbody>
            </table>
            <section class="single-product-content">
               <div class="tinymce-content" data-editor="true">جنس ست غواصی فلامنت مات با کیفیت است . تنخور شلوار بگ
                  میباشد.
                  سایزبندی M و L و XL مناسب برای 38 تا 46</div>
               <div class="tinymce-content" data-editor="true">*ست مشابه ست طرح اویشو میباشد*</div>
            </section>
         </div>
         <div class="card" v-else>
            <h4>نظرات</h4>
         </div>
         <section class="mt-5">
            <!-- <HomeLatestMens section-title="محصولات مرتبط" :slides="products"/> -->
         </section>
      </div>
   </div>
</template>
<script setup lang="ts">
import DATABASE from "@/assets/DATABASE.json";

const isOpenSizeModal = ref(false);
const title = 'بلوز/شومیز';
const selectedTab = ref(1);
definePageMeta({
   title: 'بلوز/شومیز'
});

const products = DATABASE["products"] as [];
</script>
<style scoped lang="scss">
.tabs {
   @apply mt-4 mb-2 bg-cardBg rounded p-5 text-muted;

   .active {
      @apply relative text-primary;

      &::after {
         content: " ";
         position: absolute;
         right: 0;
         bottom: -1.2rem;
         width: 100%;
         height: 2px;
         border-radius: 3px;
         background: var(--color-primary);
      }
   }
}

.color-selection {
   @apply border rounded border-secondary cursor-pointer;

   svg {
      opacity: 0;
      transition: all ease .3s;
   }

   &.active {
      @apply border-darkPrimary;

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

.size {
   &.active {
      @apply border-darkPrimary;
   }
}
</style>