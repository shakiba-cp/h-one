<template>
  <div class="col-span-4 px-3">
    <div class="px-8 py-5 rounded-md bg-white flex flex-col relative">
      <DashboardPageUserInfo />
      <ul>
        <li
          @click="$router.push(i.url)"
          v-for="(i, index) in sidebarItems"
          class="flex cursor-pointer gap-4 py-5 px-4 rounded-md"
          :key="index"
        >
          <img :src="i.icons" alt=" side bar icon" />
          {{ i.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IBreadCrumb } from "@/types/DashboardModel";

const sidebarItems: IBreadCrumb[] = [
  {
    label: "پیشخوان",
    url: "/dashboard/panel",
    icons: "https://ibolak.com/assets/icons/home.svg",
  },
  {
    label: "حساب کاربری",
    url: "/dashboard/profile/edit",
    icons: "https://ibolak.com/assets/icons/home.svg",
  },

];
</script>
