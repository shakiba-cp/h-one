<template>
  <div>
    <a style="margin-top: 0 !important;" href="https://ibolak.com/link/redirect/em5zb" target="_blank">
      <img src="https://ibolak.com/storage/image/2024/11/1732174396-9WD9qlaKTKjX0CuR.gif" class="w-full"
        alt="بنر هدر تخفیف اسنپ پی">
    </a>
    <NuxtLayout>
      <NuxtPage />
      <TheBottomNavigation />
    </NuxtLayout>
    <BaseModal size="sm"
      :sub-title="authStore.currentStep == 'code' ? `کد تایید به شماره '${authStore.phoneNumber}' ارسال شد` : ''"
      title="ورود و ثبت نام" v-model="authStore.isOpenModal">
      <AuthLogin />
    </BaseModal>
  </div>
</template>
<script setup lang="ts">
import { GetCurrentShopingCart } from './services/shopCart.service';
import { useUtilStore } from './stores/util.store';

const authStore = useAuthStore();
const utilStore = useUtilStore();
await utilStore.initCategories();
onMounted(async () => {
  authStore.setCurrentUser();
  await utilStore.updateShopCartItems();

})
</script>
