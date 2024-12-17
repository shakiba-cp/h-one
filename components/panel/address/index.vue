<template>
   <div>
      <div class="flex flex-wrap items-center" v-auto-animate>
         <template v-if="loading">
            <BaseSkeletonLoaidng v-for="item in [1, 2]" height="270px" parent-class="w-1/2 p-2 sm:w-full rounded"
               class="rounded" />
         </template>
         <template v-else>
            <div class="p-2 w-1/2 sm:w-full" v-for="item in data" :key="item.id">
               <div class="border border-borderColor rounded p-4 flex flex-col gap-3 ">
                  <h5>عنوان : {{ item.name }}</h5>
                  <p>{{ item.address }}</p>
                  <div class="flex gap-2 items-center">
                     <IconsUser />
                     <p>{{ item.receiver_name }}</p>
                  </div>
                  <div class="flex gap-2 items-center">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                           d="M17.6569 5.35098V5.35098C20.7811 8.48993 20.7811 13.5636 17.6569 16.7025V16.7025L14.345 20.0254C13.056 21.3205 10.9611 21.3254 9.666 20.0364L9.655 20.0254L6.34313 16.7025C3.21898 13.5635 3.21895 8.48998 6.34307 5.35098V5.35098C9.45255 2.22678 14.5059 2.21485 17.6301 5.32433L17.6568 5.35098H17.6569Z"
                           stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                     </svg>
                     <p>{{ item.city }}</p>
                  </div>
                  <div class="flex gap-2 items-center">
                     <IconsPhone />
                     <p>{{ item.receiver_phone }}</p>
                  </div>
                  <div class="w-full justify-end flex gap-2">
                     <BaseButton size="sm" @click="deleteAddress(item.id!)" outline>حذف</BaseButton>
                     <BaseButton @click="openEditModal(item)" size="sm" color="secondary">ویرایش</BaseButton>
                  </div>
               </div>
            </div>
            <div class="p-2 w-1/2 sm:w-full h-[280px] sm:h-[200px]">
               <button @click="isOpenAddModal = true" class="new-address">
                  <IconsPlus />
                  افزودن آدرس
               </button>
            </div>
         </template>
      </div>
      <BaseModal v-model="isOpenAddModal" title="افزودن آدرس">
         <PanelAddressAdd @success="() => getData()" />
      </BaseModal>
      <BaseModal v-model="isOpenEditAddModal" title="ویرایش آدرس">
         <PanelAddressEdit :address="selectedAddress!" @success="() => getData()" />
      </BaseModal>
   </div>
</template>
<script setup lang="ts">
import type { Address } from '~/models/Address';
import { GetAddresses, RemoveAddress } from '~/services/profile.service';

const loading = ref(true);
const data: Ref<Address[]> = ref([]);
const isOpenAddModal = ref(false);
const isOpenEditAddModal = ref(false);
const selectedAddress: Ref<Address | null> = ref(null);
const toast = useToast();
onMounted(async () => {
   await getData();
});
const openEditModal = (address: Address) => {
   selectedAddress.value = address;
   isOpenEditAddModal.value = true;
}
const deleteAddress = async (id: number) => {
   if (confirm('آیا از حذف آدرس اطمینان دارید ؟')) {
      loading.value = true;
      var res = await RemoveAddress(id);
      if (res.isSuccess) {
         toast.showToast("آدرس با موفقیت ویرایش شد");
         await getData();
      }
      loading.value = false;
   }

}
const getData = async () => {
   isOpenAddModal.value = false;
   isOpenEditAddModal.value = false;

   loading.value = true;
   var res = await GetAddresses();
   if (res.isSuccess) {
      data.value = res.data;
   }
   loading.value = false;
}
</script>
<style scoped lang="scss">
.new-address {
   @apply flex rounded justify-center hover:opacity-45 items-center w-full h-full relative;
   border: 10px dashed var(--border-color);
   transition: opacity .15s ease-out;

   &::before {
      width: calc(100% + 16px);
      height: calc(100% + 16px);
      position: absolute;
      top: -8px;
      left: -8px;
      border-radius: var(--border-radius);
      display: block;
      content: ' ';
      pointer-events: none;
      border: 9px solid;
      z-index: 1;
      @apply border-cardBg;
   }
}
</style>