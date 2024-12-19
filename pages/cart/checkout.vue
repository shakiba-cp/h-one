<template>
  <div>
    <div v-if="loading" class="fixed flex justify-center items-center top-0 right-0 bg-black/55 h-full w-full z-50">
      <p class="text-white text-h2">لطفا منتظر بمانید...</p>
    </div>
    <TheBreadcrumb class="sm:hidden" :items="[
      {
        title: 'سبد خرید',
        to: '/cart'
      }, {
        title: 'تکمیل سفارش'
      }]" />
    <div class="container ">
      <div class="gap-5 flex md:flex-wrap pt-2 justify-between w-full">
        <div class="w-[70%] h-fit  md:w-full">
          <div class="card">
            <h4 class="mb-2">انتخاب آدرس سفارش</h4>
            <PanelAddress v-model="addressId" selectable />
          </div>

        </div>
        <div class="w-[30%] md:w-full  h-fit sticky top-1">
          <div class="card mb-2">
            <h4>انتخاب روش ارسال</h4>
            <form class="flex flex-col gap-3 mt-3">
              <BaseCheckBox checked v-model="shippingMethod" value="0" input-id="tipax" name="shipment" type="radio"
                label="تیپاکس (پس کرایه)" />
              <BaseCheckBox v-model="shippingMethod" value="1" input-id="piost" name="shipment" type="radio"
                label="پست پیشتاز (49,000 تومان)" />
            </form>
          </div>
          <div class="card">
            <template v-if="!discount">

              <form @submit.prevent="checkDiscount" :class="{ 'card-loading': discountLoading }">
                <BaseInput v-model="discountCode" name="discount" label="کد تخفیف"
                  placeholder="کدتخفیف مورد نظر خود را وارد کنید" />
                <BaseButton :loading="discountLoading" type="submit" color="secondary" class="mt-2 w-full">اعمال کد
                  تخفیف
                </BaseButton>
              </form>
              <hr class="mt-4" />
            </template>

            <div class="flex flex-col gap-3 mt-4">
              <div class="flex justify-between gap-2">
                <p>مجموع سفارش</p>
                <p>{{ (utilStore.getShopCartTotalPrice - utilStore.getShopCartDiscount) }} تومان</p>
              </div>
              <div class="flex justify-between gap-2">
                <p>هزینه ارسال</p>
                <p v-if="shippingMethod == '0'">پس کرایه</p>
                <p v-else>49,000 تومان</p>
              </div>
              <template v-if="discount">
                <hr class="my-1" />
                <div class="flex justify-between gap-2">
                  <p>کد تخفیف</p>
                  <p>{{ discount?.code }}</p>
                </div>
                <div class="flex justify-between gap-2">
                  <p>مبلغ تخفیف</p>
                  <p>{{ calculateDiscount.toLocaleString() }} تومان</p>
                </div>
                <hr class="my-1" />

              </template>

              <div class="flex justify-between gap-2">
                <p>مبلغ پرداختی شما</p>
                <p>{{ (calculateTotalOrderPrice).toLocaleString() }} تومان</p>
              </div>
              <BaseButton :loading="loading" @click="payOrder" left-icon class="w-full mt-1">
                <template #icon>
                  <IconsArrow width="24px" height="24px" />
                </template>
                پرداخت سفارش
              </BaseButton>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Discountcode } from '~/models/DiscountCode';

const addressId = ref(0);
const utilStore = useUtilStore();
const discountCode = ref('');
const discountLoading = ref(false);
const toast = useToast();
const discount: Ref<Discountcode | null> = ref(null);
const shippingMethod = ref('0');
const loading = ref(false);
const checkDiscount = async () => {
  discountLoading.value = true;
  var res = await CustomFetch<Discountcode>("/shop/orders/check-code", {
    method: "POST",
    body: {
      off_code: discountCode.value,
      order_price: utilStore.getShopCartTotalPrice - utilStore.getShopCartDiscount
    }
  });
  if (res.isSuccess == false) {
    discountCode.value = '';
  } else {
    discount.value = res.data!;
    toast.showToast("کد تخفیف با موفقیت اعمال شد")
  }
  discountLoading.value = false;
}
const calculateTotalOrderPrice = computed(() => {
  var orderPrice = utilStore.getShopCartTotalPrice - utilStore.getShopCartDiscount;
  var postPrice = 0;
  if (shippingMethod.value == '1') {
    postPrice = 49000;
  }
  return orderPrice + postPrice - calculateDiscount.value;
})
const calculateDiscount = computed(() => {
  if (!discount.value) {
    return 0;
  }
  if (discount.value.amount) {
    return +discount.value.amount;
  }
  var orderPrice = utilStore.getShopCartTotalPrice - utilStore.getShopCartDiscount;
  var discountVal = (orderPrice * +discount.value.percent) / 100;
  return discountVal;
});

const payOrder = async () => {
  if (addressId.value == 0) {
    toast.showToast("لطفا آدرس خود را انتخاب کنید", ToastType.error);
    return;
  }
  var data = {
    address_id: addressId.value,
    address: "address",
    shipping: shippingMethod.value,
    off_code: discount.value?.code,
    success_url: BASE_DOMAIN_URL + "/payment/success",
    fail_url: BASE_DOMAIN_URL + "/payment/failure"
  };
  RemoveEmptyProps(data);
  loading.value = true;
  var result = await CustomFetch<string>("/shop/orders/pay", {
    method: "POST",
    body: data
  });
  if (result.isSuccess) {
    document.location.replace(result.data);
  } else {
    loading.value = false;
  }
}
</script>

<style></style>