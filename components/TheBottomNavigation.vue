<template>
  <div>
    <div class="fixed dark:border-t border-borderColor z-[999] shadow justify-between w-full right-0 bottom-0 hidden sm:flex gap-2
   bg-cardBg pb-2 pt-4 px-6">
      <NuxtLink to="/" active-class="active">
        <IconsHome class="text-black dark:text-muted" width="24" height="24" />
        خانه
      </NuxtLink>
      <button  @click="isOpenModal = true">
        <IconsRows class="text-black dark:text-muted" width="24" height="24" />
        دسته‌بندی‌ها
      </button>
      <button @click="isSearchModal = true">
        <IconsSearch class="text-black dark:text-muted"/>
        جستجو
      </button>
      <NuxtLink to="/cart" active-class="active">
        <span v-if="utilStore.shopCartItems.length > 0" class="absolute -top-1 left-1 text-h8 rounded-full flex items-center justify-center 
      w-[20px] h-[20px] !bg-primary text-white">{{ utilStore.shopCartItems.length }}</span>
        <IconsBasket class="text-black dark:text-muted" />
        سبد خرید
      </NuxtLink>
      <NuxtLink to="/panel" active-class="active">
        <IconsUser class="text-black dark:text-muted" />
        پروفایل
      </NuxtLink>
    </div>
    <BaseModal v-model="isOpenModal" title="دسته بندی ها">
      <div class="w-full flex flex-col gap-2" v-for="item in utilStore.categories">
        <NuxtLink @click="isOpenModal = false" :to="'/products/' + item.id"
          class="flex font-bold mb-2 justify-between w-full ">
          {{ item.name }}
          <IconsChevron />

        </NuxtLink>
        <div class="pr-4" v-if="item.subcategories.length > 0">
          <NuxtLink @click="isOpenModal = false" v-for="sub in item.subcategories" :to="'/products/' + sub.id"
            class="flex mb-2 justify-between w-full ">
            {{ sub.name }}
            <IconsChevron />
          </NuxtLink>
        </div>
      </div>
    </BaseModal>
    <BaseModal title="جستجو محصولات" v-model="isSearchModal">
      <form @submit.prevent="searchProducts" class="flex flex-col gap-2">
        <BaseInput v-model="search" name="search" placeholder="نام محصول مورد نظر را بنویسید" />
        <BaseButton type="submit" color="secondary">جستجو</BaseButton>
      </form>

    </BaseModal>
  </div>
</template>

<script lang="ts" setup>
const utilStore = useUtilStore();
const isOpenModal = ref(false);
const isSearchModal = ref(false);
const search = ref('');
const router = useRouter();
const toast = useToast();
const searchProducts = () => {
  if (search.value.length > 3) {
    router.push('/products?search=' + search.value);
    isSearchModal.value = false;
  } else {
    toast.showToast("متن جستجو کامل تری وارد کنید", ToastType.warning)
  }
}
</script>

<style scoped lang="scss">
.fixed a,button {
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