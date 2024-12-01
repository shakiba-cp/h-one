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

          <BaseButton to="/panel">
            حساب کاربری
            <template #icon>
              <IconsUser />
            </template>
          </BaseButton>

          <div @click="toggleSearchState" dir="rtl" class="flex items-center relative search-wrapper">
            <span class="absolute right-3 top-1/2 transform -translate-y-1/2">
              <img src="/icons/search.svg" alt="Search Icon" />
            </span>
            <input name="search_key" autocomplete="off" maxlength="100" type="text"
              class="pl-10 pr-3 py-2 border rounded w-full" placeholder="جستجو در آی‌بولک" />


          </div>

          <!-- Autocomplete Section -->
        </div>
        <nuxt-link to="/">
          <img src="/images/ibolak-logo.svg" class="h-12" alt="آی‌بولک" />
        </nuxt-link>
      </div>
      <nav class="flex justify-between items-stretch">
        <div class="w-fit flex items-center lg:gap-2 xl:gap-4">
          <ul class="flex gap-4">
            <li v-for="(category, index) in categories" :key="category.id" class="dots-after relative group">
              <button class="w-full h-full flex flex-col">
                <div class="flex gap-1 items-center">
                  <span> {{ category.title }} </span>
                  <img src="/icons/arrow-down.svg" v-show="category.childs.length > 0" />
                </div>
                <div class="dots-after-dots"><span></span><span></span><span></span></div>
              </button>
              <ul v-if="category.childs && category.childs.length"
                class="absolute z-[200] translate-y-[32px] 
                border border-borderColor duration-200 group-hover:transition-all hidden group-hover:flex bg-white rounded-b">
                <li v-for="(child, childIndex) in category.childs" :key="child.id" :class="{
                  'border-l border-borderColor': childIndex != category.childs.length - 1,
                }" class="px-5 min-w-60 py-5 text-nowrap w-1/3">
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
        <div class="flex w- items-center  space-x-4 rtl:space-x-reverse">
          <BaseButton color="secondary">
            دانلود اپلیکیشن
            <template #icon>
              <img src="/icons/download.svg" alt="basket icon" />
            </template>
          </BaseButton>
          <BaseButton color="secondary">
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
    @apply justify-between flex px-5 pb-5 pt-4 border-b shadow-sm;

    .title {
      @apply text-black text-h5;
    }
  }
}
</style>