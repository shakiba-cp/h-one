<template>
  <aside class="bg-white  relative rounded w-[20%] p-4 h-[300px]">
    <div class="avatar shadow relative py-8 px-4 z-10 bg-white w-[90%] mx-auto rounded flex justify-center">
      <div class="flex gap-2 items-center">
        <img src="/iamges/avatars/1.svg" class="w-[50px] h-[50px] rounded" />
        <div>
          <p>محمد اشرافی</p>
          <p class="text-muted">موجودی: ۰ تومان</p>
        </div>
      </div>
    </div>
    <div class="mt-5">
      <NuxtLink to="/panel" class="side-link">
        <IconsHome />
        پیشخوان
      </NuxtLink>
      <NuxtLink to="/panel/edit" class="side-link">
        <IconsUserSettings />
        اطلاعات کاربری
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
    @apply flex gap-2 items-center p-4 hover:bg-lightSecondary rounded-sm transition-all;
  }
}
</style>