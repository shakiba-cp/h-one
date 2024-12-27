<template>
  <div>
    <TheHeader />
    <TheBreadcrumb :items="breadcrumb" />
    <div class="container mt-8">
      <div v-if="authStore.isLogin == false">
        <div class="w-1/2 sm:w-full mx-auto ">
          <h4 class="mb-2">ورود به حساب کاربری</h4>
          <ClientOnly>
            <AuthLogin class="card" />
          </ClientOnly>
        </div>
      </div>
      <div v-else>
        <p v-if="authStore.dataLoading">درحال دریافت اطلاعات...</p>
        <div v-else class="flex relative sm:flex-wrap gap-8 dashboard-page">
          <PanelTheSideBar />
          <div class="card h-fit w-[75%] md:w-[70%] flex-grow sm:!w-full" id="content">
            <slot />
          </div>
        </div>
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();
const breadcrumb = ref([]);
const authStore = useAuthStore();
</script>

<style></style>