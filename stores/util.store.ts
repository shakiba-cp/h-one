import type { Category } from "~/models/Category";
import type { ShopCartItem } from "~/models/ShopCartItem";
import { GetCurrentShopingCart } from "~/services/shopCart.service";

export const useUtilStore = defineStore("util", () => {
  const categories: Ref<Category[]> = ref([]);
  const shopCartItems: Ref<ShopCartItem[]> = ref([]);
  const shopCartLoading = ref(true);
  const initCategories = async () => {
    if (categories.value.length == 0) {
      var res = await CustomFetch<Category[]>("/shop/categories");
      categories.value = res.data;
    }
  };
  const updateShopCartItems = async () => {
    shopCartLoading.value = true;
    var res = await GetCurrentShopingCart();
    if (res.isSuccess) {
      shopCartItems.value = res.data;
    }
    shopCartLoading.value = false;
  };
  const getShopCartTotalPrice = computed(() => {
    return shopCartItems.value.reduce((total, item) => {
      return total + +item.productPrice * +item.entity;
    }, 0);
  });
  const getShopCartDiscount = computed(() => {
    return shopCartItems.value.reduce((total, item) => {
      var disocunt = (+item.productPrice * +item.off_percent) / 100;
      return total + disocunt * +item.entity;
    }, 0);
  });
  const removeShopCartItem = (itemId: number) => {
    shopCartItems.value = shopCartItems.value.filter(
      (item) => item.id !== itemId
    );
  };
  return {
    initCategories,
    categories,
    shopCartItems,
    getShopCartTotalPrice,
    getShopCartDiscount,
    shopCartLoading,
    updateShopCartItems,
    removeShopCartItem
  };
});
