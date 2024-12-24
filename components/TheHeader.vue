<template>
  <header class="bg-white pb-3 dark:bg-cardBg w-full ">
    <div class="container sm:hidden max-w-[95%] sm:!max-w-full sm:!w-full mx-auto px-4">
      <div class="flex items-center justify-between mb-3">
        <div class="flex  gap-3 items-center">
          <BaseButton to="/cart" outline color="secondary">
            <p>
              سبد خرید <b v-if="utilStore.shopCartItems.length > 0" class="text-primary"
                style="font-family: 'Courier New', Courier, monospace;">({{ utilStore.shopCartItems.length }})</b>
            </p>
            <template #icon>
              <IconsBasket />
            </template>
          </BaseButton>

          <BaseButton @click="account">
            حساب کاربری
            <template #icon>
              <IconsUser />
            </template>
          </BaseButton>

          <BaseInput name="search" inputClass="min-w-[350px]" placeholder="جستجو...">
            <template #icon>
              <IconsSearch />
            </template>
          </BaseInput>

        </div>
        <nuxt-link to="/">
          <img src="/logo.png" class="h-12" alt="h1 mod" />
        </nuxt-link>
      </div>
      <nav class="flex justify-between items-stretch">
        <div class="w-fit flex items-center lg:gap-2 xl:gap-4">
          <ul class="flex gap-4">
            <li v-for="(category) in utilStore.categories" :key="category.id" class="relative group">
              <nuxt-link :to="`/products/${category.id}`" class="w-full h-full flex flex-col">
                <div class="flex gap-1 items-center">
                  <span> {{ category.name }} </span>
                  <IconsChevron position="down" v-if="category.subcategories.length > 0" />
                </div>
              </nuxt-link>
              <ul v-if="category.subcategories && category.subcategories.length > 0" class="absolute z-[200] top-6
                border border-borderColor 
                duration-200 group-hover:transition-all hidden group-hover:flex flex-wrap bg-cardBg rounded-b">
                <li v-for="(child, childIndex) in category.subcategories" :key="child.id" :class="{
                  'border-l border-borderColor': childIndex != category.subcategories.length - 1,
                }" class="px-5 min-w-60 py-3 text-nowrap w-1/3">
                  <div class="">
                    <nuxt-link :to="`/products/${child.id}`">
                      {{ child.name }}
                    </nuxt-link>
                  </div>
                  <ul v-if="child.subcategories && child.subcategories.length > 0" class="space-y-3">
                    <li v-for="(childSubcategories, childIndex) in child.subcategories" :key="childSubcategories.id"
                      class="py-1 px-2 text-nowrap">
                      <nuxt-link :to="`/products/${childSubcategories.id}`" class="flex relative">
                        {{ childSubcategories.name }}
                      </nuxt-link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="flex gap-2 items-center ">
          <TheDarkModeSwicher />
          <BaseButton to="https://www.instagram.com/h_one_mod" target="_blank" color="secondary">
            اینستاگرام <span style="font-family: Arial, Helvetica, sans-serif;">H1 mod</span>
            <template #icon>

              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.168 3.78555H16.1665L7.83348 3.78555L7.83201 3.78556C6.59807 3.78919 5.41431 4.27392 4.53963 5.13611C3.66471 5.99855 3.17022 7.16874 3.16652 8.39153V8.39304L3.16652 16.6071L3.16652 16.6087C3.17022 17.8314 3.66471 19.0016 4.53963 19.8641C5.41431 20.7263 6.59807 21.211 7.83201 21.2146H7.83348L16.1665 21.2146L16.168 21.2146C17.4019 21.211 18.5857 20.7263 19.4604 19.8641C20.3353 19.0016 20.8298 17.8314 20.8335 16.6087V16.6071L20.8335 8.39304L20.8335 8.39153C20.8298 7.16874 20.3353 5.99855 19.4604 5.13612C18.5857 4.27392 17.4019 3.78919 16.168 3.78555ZM7.83348 3.14282H16.1665C19.1057 3.14282 21.5 5.51325 21.5 8.39304V16.6071C21.5 19.4869 19.1057 21.8574 16.1665 21.8574H7.83348C4.89434 21.8574 2.5 19.4869 2.5 16.6071V8.39304C2.5 5.51325 4.89434 3.14282 7.83348 3.14282Z"
                  fill="currentColor" stroke="currentColor" />
                <path
                  d="M17.4176 7.89151H17.4165C17.2666 7.89151 17.1206 7.84765 16.9971 7.76629L16.7298 8.17203L16.9971 7.76629C16.8736 7.68498 16.7785 7.57016 16.7226 7.43719C16.6668 7.3043 16.6523 7.1585 16.6806 7.0179C16.709 6.87727 16.7793 6.74709 16.8836 6.64422C16.9881 6.54127 17.122 6.47037 17.2688 6.44158C17.4157 6.41278 17.5679 6.42762 17.7059 6.48394C17.8437 6.54023 17.9604 6.63508 18.042 6.75539C18.1235 6.87562 18.1665 7.01619 18.1665 7.15938L18.1665 7.16047C18.1667 7.25552 18.1479 7.34985 18.1109 7.4381C18.0739 7.52638 18.0194 7.60706 17.9502 7.67531L18.3012 8.0314L17.9502 7.67531C17.8809 7.74359 17.7983 7.79808 17.7068 7.83532C17.6153 7.87257 17.517 7.89172 17.4176 7.89151ZM12 8.71264L11.9995 8.71264C10.9855 8.71371 10.012 9.11114 9.29291 9.81997C8.57356 10.529 8.16761 11.492 8.16652 12.4979V12.4985C8.16652 13.2488 8.39229 13.9818 8.81444 14.6045C9.23652 15.2272 9.83568 15.7114 10.5353 15.9971C11.2349 16.2827 12.0043 16.3573 12.7465 16.2118C13.4888 16.0663 14.1715 15.7069 14.7081 15.178C15.2448 14.649 15.6111 13.9742 15.7595 13.2384C15.908 12.5026 15.8317 11.74 15.5407 11.0473C15.2496 10.3548 14.7573 9.76396 14.127 9.34883C13.4968 8.93375 12.7566 8.71264 12 8.71264ZM9.49717 8.81812C10.2374 8.33059 11.1084 8.06994 12 8.06994C13.1958 8.06994 14.3411 8.53824 15.1845 9.36956C16.0277 10.2006 16.5 11.3263 16.5 12.4985C16.5 13.3727 16.237 14.228 15.7435 14.9561C15.2499 15.6842 14.5475 16.2529 13.7244 16.5889C12.9013 16.925 11.9951 17.0131 11.1207 16.8416C10.2465 16.6702 9.44435 16.2473 8.81547 15.6274C8.18666 15.0076 7.75927 14.2187 7.5862 13.3611C7.41313 12.5034 7.50189 11.6144 7.84156 10.8061C8.18126 9.99771 8.75703 9.30559 9.49717 8.81812Z"
                  fill="currentColor" stroke="currentColor" />
              </svg>

            </template>
          </BaseButton>
        </div>
      </nav>
    </div>
    <div class="hidden items-center sm:flex justify-between w-full">
      <div class="flex items-center gap-2">
        <button v-if="canGoBack" class="flex items-center gap-3" @click="$router.back">
          <IconsChevron position="right" width="16" height="16" />
        </button>
        <p class="title">{{ $route.meta.title }}</p>
      </div>
      <img src="/logo.png" alt="logo" />
    </div>
  </header>
</template>

<script setup lang="ts">

const router = useRouter();
const SearchState = ref(false);
const authStore = useAuthStore();
const utilStore = useUtilStore();
const canGoBack = ref(false);

const account = () => {
  if (authStore.isLogin) {
    router.push('/panel');
  } else {
    authStore.openLoginModal();
  }
}
watch(router.currentRoute, () => {
  checkBack();
})




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
onMounted(() => {
  checkBack();
})
const checkBack = () => {
  const referrer = document.referrer;
  const currentDomain = window.location.origin;
 // بررسی وجود تاریخچه مناسب یا بازگشت از صفحات داخلی سایت
 if (window.history.state?.back || (referrer && referrer.startsWith(currentDomain))) {
    canGoBack.value = true;
  } else {
    canGoBack.value = false;
  }
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