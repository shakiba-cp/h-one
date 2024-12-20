<template>
  <aside class="bg-white dark:bg-black rounded w-[25%] h-fit sticky top-0 sm:!w-full p-4  md:w-[30%]">
    <div
      class="avatar shadow relative py-8 px-4 z-10 bg-white dark:bg-cardBg w-[90%] mx-auto rounded flex justify-center">
      <div class="flex md:flex-col md:justify-center md:text-center gap-2 items-center">
        <img src="/images/avatars/1.png" class="w-[50px] h-[50px] rounded" />
        <div>
          <p>{{ authStore.userData?.name }}</p>
          <!-- <p class="text-muted">موجودی: ۰ تومان</p> -->
        </div>
      </div>
    </div>
    <div class="mt-5">
      <NuxtLink to="/panel#content" class="side-link">
        <IconsHome />
        پیشخوان
      </NuxtLink>
      <NuxtLink to="/panel/edit#content" class="side-link">
        <IconsUserSettings />
        اطلاعات کاربری
      </NuxtLink>
      <NuxtLink to="/panel/order#content" class="side-link">
        <IconsBasket />
        سفارش‌ها
      </NuxtLink>
      <NuxtLink to="/panel/addresses#content" class="side-link">
        <IconsAddress />
        آدرس‌ها
      </NuxtLink>
      <NuxtLink @click="authStore.logOut" to="/" class="side-link">
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8.5V16.5" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M12 3.5V3.5C7.029 3.5 3 7.529 3 12.5V12.5C3 17.471 7.029 21.5 12 21.5V21.5C16.971 21.5 21 17.471 21 12.5V12.5C21 7.529 16.971 3.5 12 3.5Z"
            stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        خروج از حساب
      </NuxtLink>
    </div>
  </aside>
</template>

<script lang="ts" setup>
const authStore = useAuthStore();


</script>

<style scoped lang="scss">
aside {
  &::after {
    content: " ";
    @apply bg-gray h-[100px] w-full top-0 left-0 absolute rounded-t;
  }

  .side-link {
    @apply flex gap-2 items-center p-4 hover:bg-lightSecondary dark:hover:bg-cardBg rounded-sm transition-all;
  }

  a.router-link-active {
    background: black !important;
    @apply dark:!bg-darkSecondary;
    color: white;
  }
}
</style>