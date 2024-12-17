<template>
  <div>
    <TheHeader />
    <TheBreadcrumb :items="breadcrumb" />
    <div class="container mt-8">
      <p v-if="authStore.dataLoading">درحال دریافت اطلاعات...</p>
      <div v-else class="flex relative sm:flex-wrap gap-8 dashboard-page" >
        <PanelTheSideBar />
        <div class="card h-fit w-[75%] md:w-[70%] flex-grow sm:!w-full" id="content">
          <slot />
        </div>
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script lang="ts" setup>
import type { IBreadCrumb } from '~/types/DashboardModel';

const router = useRouter();
const breadcrumb = ref<IBreadCrumb[]>([]);
const authStore = useAuthStore();
watch(router.currentRoute, (newValue) => {

});

onBeforeMount(() => {
});

</script>

<style></style>