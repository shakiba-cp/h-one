<template>
  <aside class="bg-white dark:bg-black rounded w-[25%] h-fit sticky top-0 sm:!w-full p-4  md:w-[30%]">
    <div
      class="avatar shadow relative py-8 px-4 z-10 bg-white dark:bg-cardBg w-[90%] mx-auto rounded flex justify-center">
      <div class="flex md:flex-col md:justify-center md:text-center gap-2 items-center">
        <img src="/iamges/avatars/1.svg" class="w-[50px] h-[50px] rounded" />
        <div>
          <p>محمد اشرافی</p>
          <p class="text-muted">موجودی: ۰ تومان</p>
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
    </div>
  </aside>
</template>

<script lang="ts" setup>


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