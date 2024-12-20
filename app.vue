<template>
  <div>
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
  if(authStore.isLogin){
    await utilStore.updateShopCartItems();
  }
})
</script>
