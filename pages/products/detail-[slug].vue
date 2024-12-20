<template>
   <div>

      <Head>
         <Title>{{ title }}</Title>
      </Head>
      <BaseAlert class="hidden sm:flex !my-0 text-h7 !rounded-none" color="secondary">
         با توجه به تفاوت رنگ در صفحه نمایش و واقعیت، ممکن است رنگ محصولات تا ۲۰٪ متغیر باشد
      </BaseAlert>
      <TheBreadcrumb class="sm:hidden" :items="[{
         title: product.categories[0].name,
         to: `/products/` + product.categories[0].id
      },
      {
         title: title
      }]" />
      <ProductSizeTable v-model="isOpenSizeModal" :data="product.sizingTable" />

      <div class="container">
         <div class="card flex sm:flex-col justify-between gap-6">
            <div class="w-[45%] sm:w-full">
               <ProductImages :data="[...product.images]
                  .filter(f => f.color_name == selectedColor?.color_name) ?? []" />
            </div>
            <div class="w-[55%] sm:w-full">
               <h1 class="text-h2 sm:text-h4">{{ title }}</h1>
               <nuxt-link to="/products/test" class="text-muted">بلوز/شومیز</nuxt-link>
               <BaseAlert color="secondary" class="sm:hidden">
                  با توجه به تفاوت رنگ در صفحه نمایش و واقعیت، ممکن است رنگ محصولات تا ۲۰٪ متغیر باشد
               </BaseAlert>
               <h6 class="mt-5 text-h5 font-bold">رنگ : </h6>
               <div class="mt-4 flex-grow flex gap-3 ">
                  <div class="w-[70px]" v-for="item in product.colors" :key="item.color_name">
                     <div class="color-selection " @click="selectedColor = item"
                        :class="{ 'active': selectedColor?.color_name == item.color_name }">
                        <div :style="{ backgroundColor: item.color_hex }"
                           class="rounded-t flex justify-center items-center px-4 py-3">
                           <IconsCheck color="white" />
                        </div>
                        <div class="bg-lightSecondary rounded-b text-center px-2 py-1">
                           {{ item.color_name }}
                        </div>
                     </div>
                  </div>
               </div>
               <Transition name="page">
                  <div v-if="selectedColor">
                     <h6 class="mt-8 text-h5 font-bold">سایز (حروفی) : </h6>
                     <div class="mt-4 flex-wrap flex gap-3 " v-auto-animate>
                        <label :for="item" @click="selectedSize = item"
                           v-for="item in Object.keys(selectedColor.color_sizes)" :key="item" class="px-4 py-3 border 
                  border-secondary cursor-pointer
                  rounded-sm size " :class="{ 'active': selectedSize == item }">
                           <BaseCheckBox name="size" :input-id="item" :value="item" type="radio" :label="item" />
                        </label>
                     </div>
                  </div>
               </Transition>

               <div class="flex flex-col items-end mt-5 ">
                  <div class="fixed w-full left-0 items-center bottom-[4.45rem] border-b 
                     border-secondary z-10 justify-between hidden sm:flex bg-cardBg shadow py-3 px-3">
                     <BaseButton @click="addToShopCart">افزودن به سبد خرید</BaseButton>
                     <div>
                        <p v-if="product.offPercent != '0'" class="text-left"><del class="text-h6 ">{{
                           Number(product.price).toLocaleString() }} تومان</del></p>
                        <p class="text-primary  text-h4">{{ totalPrice }} تومان</p>
                     </div>
                  </div>
                  <p v-if="product.offPercent != '0'"><del class="text-h5 sm:hidden">{{
                     Number(product.price).toLocaleString() }} تومان</del></p>
                  <p class="text-primary text-h3 sm:hidden">{{ totalPrice }} تومان</p>
                  <div class="flex gap-2 sm:w-full">
                     <BaseButton class="sm:w-full" @click="isOpenSizeModal = true" color="secondary">
                        <template #icon>
                           <IconsRuler />
                        </template>
                        جدول سایزبندی
                     </BaseButton>
                     <BaseButton @click="addToShopCart" class="sm:!hidden">
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
            <!-- <button @click="selectedTab = 1" :class="{ 'active': selectedTab == 1 }">
               دیدگاه کاربران</button> -->
         </div>
         <div class=" card" v-if="selectedTab == 0">
            <table class="table table-striped mb-5" v-if="product.attributes">
               <tbody>
                  <tr v-for="(item, index) in Object.keys(product.attributes)" :key="index">
                     <td>{{ item }}</td>
                     <td>
                        {{ product.attributes[item] }}
                     </td>
                  </tr>
               </tbody>
            </table>
            <section class="single-product-content" v-html="product.description">
            </section>
         </div>
         <div class="card" v-else>
            <h4>نظرات</h4>
         </div>
         <section class="mt-5" v-if="product.relatedProducts">
            <HomeLatestMens section-title="محصولات مرتبط" :slides="product.relatedProducts" />
         </section>
      </div>
   </div>
</template>
<script setup lang="ts">
import type { Product, ProductColor } from '~/models/Product';
import { AddToCart } from '~/services/shopCart.service';

const router = useRouter();
const route = useRoute();
const productId = route.params.slug;
const toast = useToast();
const { data, status } = await useAsyncData(`product-${productId}`,
   () => CustomFetch<Product>(`/shop/show-products/${productId}`));
if (!data.value?.data) {
   if (process.server) {
      throw createError({ statusCode: 404, message: 'not found' })
   } else {
      router.push('/products')
      toast.showToast('محصول مورد نظر یافت نشد', ToastType.warning)
   }
}
const product = data.value!.data;
const isOpenSizeModal = ref(false);
const title = product.name;
route.meta.title = title;
const selectedTab = ref(0);
const selectedColor: Ref<ProductColor | null> = ref(product.colors[0]);
const size = Object.keys(selectedColor.value?.color_sizes ?? {})[0];
const selectedSize = ref(size)
const utilStore = useUtilStore();
const authStore = useAuthStore();

const totalPrice = computed(() => {
   var price = Number(product.price);
   if (product.offPercent == "0") {
      return price.toLocaleString();
   }
   var discount = (price * +product.offPercent / 100)
   return (price - discount).toLocaleString();
});
const addToShopCart = async () => {

   if (selectedSize.value) {
      if (authStore.isLogin == false) {
         authStore.openLoginModal(addToShopCart);
         return;
      }
      //@ts-ignore
      var res = await AddToCart(selectedColor.value?.color_sizes[selectedSize.value]);
      if (res.isSuccess) {
         toast.showToast("محصول به سبد خرید اضافه شد")
         await utilStore.updateShopCartItems();

      }
   }
}
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