<template>
  <div class="bg-[#ecebe9]">
    <div class="container flex items-center gap-4 py-4 mb-5">
      <template v-for="(breadcrumb, index) in breadcrumbs" :key="index">
        <nuxt-link v-if="index != breadcrumbs.length - 1" :to="breadcrumb.url">
          {{ breadcrumb.label }}
        </nuxt-link>
        <span class=" cursor-default " v-else>
          {{ breadcrumb.label }}
        
        </span>
        <img
          v-if="index !== breadcrumbs.length - 1"
          src="https://ibolak.com/assets/icons/arrow-left.svg"
          alt="Arrow left icon"
        />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
// import type {IBreadCrumb} from '@/types/'
defineProps({
    breadcrumbs:{
       type:Array<any>,
        requierd:true,
        default:()=>[]
    },
})
</script>
