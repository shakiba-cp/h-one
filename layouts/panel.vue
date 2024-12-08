<template>
  <div>
    <TheHeader />
    <TheBreadcrumb :items="breadcrumb" />
    <div class="container mt-8">
      <div class="flex relative sm:flex-wrap gap-8 dashboard-page">
        <PanelTheSideBar />
        <div class="card w-[75%] md:w-[70%] flex-grow sm:!w-full" id="content">
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

watch(router.currentRoute, (newValue) => {

});

onBeforeMount(() => {
});

</script>

<style></style>