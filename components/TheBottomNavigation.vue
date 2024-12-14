<template>
  <div class="fixed  z-[999] shadow justify-between w-full right-0 bottom-0 hidden sm:flex gap-2
   bg-cardBg pb-2 pt-4 px-6">
    <NuxtLink to="/" active-class="active">
      <IconsHome color="black" width="24" height="24" />
      خانه
    </NuxtLink>
    <NuxtLink to="/products" active-class="active">
      <IconsRows color="black" width="24" height="24" />
      دسته‌بندی‌ها
    </NuxtLink>
    <a href="#">
      <IconsSearch color="black" />
      جستجو
    </a>
    <NuxtLink to="/cart" active-class="active">
      <span class="absolute -top-1 left-1 text-h8 rounded-full flex items-center justify-center 
      w-[20px] h-[20px] !bg-primary text-white">0</span>
      <IconsBasket color="black" />
      سبد خرید
    </NuxtLink>
    <NuxtLink to="/panel" active-class="active">
      <IconsUser color="black" />
      پروفایل
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
a {
  @apply flex relative transition-all flex-col gap-1 text-h7 justify-center items-center;

  svg {
    @apply transition-all;
  }

  &.active {
    @apply text-primary;

    svg {
      fill: var(--color-primary);
    }
  }
}
</style>