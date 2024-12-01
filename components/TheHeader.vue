<template>
  <header class="bg-white">
    <teleport to="body">
      <div v-if="SearchState" class="backdrop"></div>
    </teleport>
    <div class="container sm:hidden max-w-[95%] mx-auto px-4">
      <div class="flex items-center justify-between mb-3">
        <div class="flex items-stretch gap-3">
          <BaseButton :outline="true" color="secondary">
            سبد خرید
            <template #icon>
              <img src="/icons/basket.svg" alt="basket icon" />
            </template>
          </BaseButton>

          <NuxtLink to="/panel">
          <BaseButton>
            حساب کاربری
            <template #icon>
              <img src="/icons/user.svg" alt="User icon" />
            </template>
          </BaseButton></NuxtLink>

          <div @click="toggleSearchState" dir="rtl" class="flex items-center relative search-wrapper">
            <span class="absolute right-3 top-1/2 transform -translate-y-1/2">
              <img src="/icons/search.svg" alt="Search Icon" />
            </span>
            <input name="search_key" autocomplete="off" maxlength="100" type="text"
              class="pl-10 pr-3 py-2 border rounded w-full" placeholder="جستجو در آی‌بولک" />
            <!-- 
              class="search-autocomplete mt-10"
 -->
            <div class="search-autocomplete mt-10" ref="autocomplete" :class="{ active: SearchState }"
              style="width: 522px">
              <div class="autocomplete-empty"></div>
              <div class="autocomplete-products">
                <strong>محصولات</strong>

                <a href="https://ibolak.com/shop/products/ej74g" title="" target="_self" class="autocomplete-product">
                  <div class="autocomplete-product-image">
                    <img src="/storage/image/2022/10/optimized/1664695408-u3ym4vUf6g6xzqee.jpg" alt="" />
                  </div>
                  <div class="autocomplete-product-body">
                    <p class="fw-bold">بارانی یاشیل</p>
                    <div class="d-flex align-items-center justify-content-between">
                      <span class="text-muted text-small">کاپشن/پافر</span>
                      <strong class="text-primary">499,000 تومان</strong>
                    </div>
                  </div>
                </a>
                <a href="https://ibolak.com/shop/products/bznmj" title="" target="_self" class="autocomplete-product">
                  <div class="autocomplete-product-image">
                    <img src="/storage/image/2023/9/optimized/1693748364-qjLr7A2YvxKCvqqP.JPG" alt="" />
                  </div>
                  <div class="autocomplete-product-body">
                    <p class="fw-bold">بارانی کریک لند</p>
                    <div class="d-flex align-items-center justify-content-between">
                      <span class="text-muted text-small">کاپشن/پافر</span>
                      <strong class="text-primary">398,000 تومان</strong>
                    </div>
                  </div>
                </a>
                <a href="https://ibolak.com/shop/products/b4nxr" title="" target="_self" class="autocomplete-product">
                  <div class="autocomplete-product-image">
                    <img src="/storage/image/2023/12/optimized/1701679806-BNeCCNchy8CVDyjU.JPG" alt="" />
                  </div>
                  <div class="autocomplete-product-body">
                    <p class="fw-bold">شکت بافرین</p>
                    <div class="d-flex align-items-center justify-content-between">
                      <span class="text-muted text-small">کاپشن/پافر</span>
                      <strong class="text-primary">449,000 تومان</strong>
                    </div>
                  </div>
                </a>
              </div>
              <div class="autocomplete-articles">
                <strong>مقالات</strong>
                <a href="https://ibolak.com/article/emqmy" title="" target="_self"
                  class="autocomplete-product autocomplete-article">
                  <div class="autocomplete-product-image">
                    <img src="https://ibolak.com/storage/image/2024/11/optimized/1732088560-hDvrdTFIf9kTS9KE.webp"
                      alt="" />
                  </div>
                  <div class="autocomplete-product-body">
                    <p class="fw-bold">چگونه شلوار را بشوییم تا همیشه نو به نظر برسد؟</p>
                    <div class="d-flex align-items-center justify-content-between">
                      <span class="text-muted text-small">مد و استایل</span>
                      <strong class="text-muted">30 آبان 1403</strong>
                    </div>
                  </div>
                </a>
                <a href="https://ibolak.com/article/bl8lw" title="" target="_self"
                  class="autocomplete-product autocomplete-article">
                  <div class="autocomplete-product-image">
                    <img src="https://ibolak.com/storage/image/2024/11/optimized/1731994155-57OsnYBodbXerUr8.webp"
                      alt="" />
                  </div>
                  <div class="autocomplete-product-body">
                    <p class="fw-bold">استایل اولد مانی ( Old Money ) چیست؟</p>
                    <div class="d-flex align-items-center justify-content-between">
                      <span class="text-muted text-small">مد و استایل</span>
                      <strong class="text-muted">29 آبان 1403</strong>
                    </div>
                  </div>
                </a>
              </div>
              <div class="autocomplete-categories">
                <strong>دسته‌بندی‌ها</strong>
                <div class="autocomplete-tags">
                  <a href="https://ibolak.com/shop/categories/jbqkb/لباس-زنانه" title="" target="_self"
                    class="flex gap-1 items-center">
                    <span>زنانه</span>
                    <img src="https://ibolak.com/assets/icons/arrow-left-simple.svg" alt="" />
                  </a>
                  <a href="https://ibolak.com/shop/categories/ker1b/man" title="" target="_self"
                    class="flex gap-1 items-center">
                    <span>مردانه</span>
                    <img src="https://ibolak.com/assets/icons/arrow-left-simple.svg" alt="" />
                  </a>
                  <a href="https://ibolak.com/shop/categories/pdv6b/kids" title="" target="_self"
                    class="flex gap-1 items-center">
                    <span>بچگانه</span>
                    <img src="https://ibolak.com/assets/icons/arrow-left-simple.svg" alt="" />
                  </a>
                  <a href="https://ibolak.com/shop/categories/bq2kb/شال-و-روسری" title="" target="_self"
                    class="flex gap-1 items-center">
                    <span>کلاه/روسری/شال</span>
                    <img src="https://ibolak.com/assets/icons/arrow-left-simple.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Autocomplete Section -->
        </div>
        <a href="index.html" target="_self">
          <img src="/images/ibolak-logo.svg" class="h-12" alt="آی‌بولک" />
        </a>
      </div>
      <nav class="flex justify-between items-stretch">
        <div class="w-fit flex items-center lg:gap-2 xl:gap-4">
          <ul class="flex gap-4">
            <li v-for="(category, index) in categories" :key="category.id" class="dots-after relative group">
              <button class="w-full h-full flex flex-col font-semibold">
                <div class="flex gap-1 items-center">
                  <span> {{ category.title }} </span>
                  <img src="/icons/arrow-down.svg" v-show="category.childs.length > 0" />
                </div>
                <div class="dots-after-dots"><span></span><span></span><span></span></div>
              </button>
              <ul v-if="category.childs && category.childs.length"
                class="absolute z-[20] translate-y-[32px] border border-[#e8e8e8] duration-200 group-hover:transition-all hidden group-hover:flex bg-white rounded-b">
                <li v-for="(child, childIndex) in category.childs" :key="child.id" :class="{
                  'border-l border-[#e8e8e8]': childIndex != category.childs.length - 1,
                }" class="px-6 min-w-60 py-8 text-nowrap w-1/3">
                  <div class="mb-3">
                    <strong class="font-bold mb-5">
                      {{ child.title }}
                    </strong>
                  </div>
                  <ul v-if="child.childs && child?.childs?.length" class="space-y-3">
                    <li v-for="(childSubcategories, childIndex) in child.childs" :key="child.id"
                      class="py-1 px-2 text-nowrap">
                      <nuxt-link to="/" class="flex relative">
                        <span>
                          <span class="dots-vertical-dots inset-y-0 right-0"></span>
                          <span class="dots-vertical-dots inset-y-0 right-0"></span>
                          <span class="dots-vertical-dots inset-y-0 right-0"></span></span>
                        {{ childSubcategories.title }}
                      </nuxt-link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="flex w- items-center space-x-4 rtl:space-x-reverse">
          <BaseButton color="light">
            دانلود اپلیکیشن
            <template #icon>
              <img src="/icons/download.svg" alt="basket icon" />
            </template>
          </BaseButton>
          <BaseButton color="light">
            اینستاگرام آی‌بولک

            <template #icon>
              <img src="/icons/instagram.svg" alt="basket icon" />
            </template>
          </BaseButton>
        </div>
      </nav>
    </div>
    <div class="hidden items-center sm:flex justify-between w-full">
      <button class="flex items-center gap-3" @click="back">
        <IconsChevron position="right" width="16" height="16" />
        <p class="title">{{ $route.meta.title }}</p>
      </button>
      <img src="/images/ibolak-logo.svg" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import DATABASE from "@/assets/DATABASE.json";
// Interface for categories
interface ICategoryData {
  title: string;
  parentId: number | null;
  id: number;
  childs: ICategoryData[];
};
const router = useRouter();
// Reactive state for categories and search
const SearchState = ref(false);
const categories = DATABASE["headerCategories"]

// Refs for DOM elements
const searchWrapper = ref<HTMLElement | null>(null);
const autocomplete = ref<HTMLElement | null>(null);

// Toggle function for search state
const toggleSearchState = () => {
  SearchState.value = !SearchState.value;
};

// Handle click outside
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement;

  if (!searchWrapper.value?.contains(target) && !autocomplete.value?.contains(target)) {
    SearchState.value = false;
  }
};

// Add and remove event listeners
onMounted(() => {
  document.addEventListener("mousedown", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("mousedown", handleClickOutside);
});

// Watch for changes in SearchState
watch(SearchState, (newVal) => {
  if (newVal) {
    document.body.classList.add("overflow-hidden");
    document.body.classList.add("category-page");
    document.body.classList.add("category-page");
  } else {
    document.body.classList.remove("overflow-hidden");
    document.body.classList.remove("category-page");
  }
});
const back = () => {
  router.back();
}
</script>
<style scoped lang="scss">
@media screen and (max-width:768px) {
  header {
    @apply justify-between flex px-5 pb-5 pt-4 border-b shadow-sm ;

    .title {
      @apply text-black text-h5;
    }
  }
}
</style>