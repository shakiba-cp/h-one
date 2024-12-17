import type { Category } from "~/models/Category";

export const useUtilStore = defineStore("util", () => {
  const categories: Ref<Category[]> = ref([]);

  const initCategories = async () => {
    if (categories.value.length == 0) {
      var res = await CustomFetch<Category[]>("/shop/categories");
      categories.value = res.data;
    }
  };
  return { initCategories, categories };
});
