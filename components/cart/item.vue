<template>
  <div
    class="flex gap-2 justify-between items-center mb-4 pb-4 border-b last:border-none last:mb-0 last:pb-0 border-borderColor"
    :class="{ 'card-loading': loading }">
    <BaseImg width="100px" height="100px" fit="contain" :src="`shop/${item.productImage}`" :alt="item.productName"
      class="w-[100px] h-[100px] sm:w-[80px] sm:h-[80px] rounded border border-borderColor" />
    <div class="flex justify-start flex-grow flex-col">
      <nuxt-link :to="`/products/detail-${item.productId}`" class="text-h5 mb-3">{{ item.productName }}</nuxt-link>
      <BaseNumberIncrementor v-model="count" />
    </div>
    <div class="">
      <div class="flex items-center gap-2 sm:flex-wrap sm:justify-end">
        <div class="bg-lightSecondary text-h7 p-2 rounded-sm">
          رنگ : {{ item.attribute.split("_")[1] }}
        </div>
        <div class="bg-lightSecondary text-h7 p-2 rounded-sm">
          سایز : {{ item.attribute.split("_")[0] }}
        </div>
        <BaseButton @click="isOpenPopup = true" soft size="sm">
          <IconsTrash class="sm:w-[18px] sm:h-[18px]" />
        </BaseButton>
      </div>
      <div class="text-left mt-2">
        <del v-if="item.off_percent!='0'">{{ (+item.productPrice).toLocaleString() }}</del>
        <p class="text-primary"><b>{{ totalPrice }}</b>تومان</p>
      </div>
    </div>
    <BaseConfirmPopup description="آیا از حذف محصول از سبد خرید اطمینان دارید ؟" v-model="isOpenPopup"
      :confirm-function="deleteItem" />
  </div>
</template>

<script lang="ts" setup>
import type { ShopCartItem } from '~/models/ShopCartItem';
import { DecreaseCartItem, IncreaseCartItem, RemoveCartItem } from '~/services/shopCart.service';

const { item } = defineProps<{
  item: ShopCartItem
}>();
const count = ref(+item.entity);
const loading = ref(false);
const toast = useToast();
const isError = ref(false);
const isOpenPopup = ref(false);
const utilStore = useUtilStore();

const deleteItem = async () => {
  var res = await RemoveCartItem(item.id);
  if (res.isSuccess) {
    toast.showToast("محصول با موفقیت از سبد خرید حذف شد", ToastType.success);
    utilStore.removeShopCartItem(item.id);
  }
}
watch(count, async (newVal, oldVal) => {
  if (isError.value == true) {
    isError.value = false;
    return;
  }
  if (newVal > oldVal) {
    loading.value = true;
    var res = await IncreaseCartItem(item.id);
    if (res.isSuccess == false) {
      isError.value = true;
      count.value -= 1;
      toast.showToast("خطا در افزایش تعداد محصول", ToastType.error);
    }
    item.entity = count.value.toString();
    loading.value = false;

  } else {
    loading.value = true;
    var res2 = await DecreaseCartItem(item.id);
    if (res2.isSuccess == false) {
      toast.showToast("خطا در کاهش تعداد محصول", ToastType.error);
      isError.value = true;
      count.value += 1;
    }
    item.entity = count.value.toString();
    loading.value = false;

  }

})
const totalPrice = computed(() => {
  var offPercent = +item.off_percent;
  if (offPercent == 0) {
    return (+item.productPrice).toLocaleString();
  }
  var discount = (+item.productPrice * offPercent / 100)
  return ((+item.productPrice - discount)).toLocaleString();
});
</script>

<style></style>