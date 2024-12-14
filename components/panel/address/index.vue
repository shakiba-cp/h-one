<template>
   <div class="flex flex-wrap">
      <div class="p-2 w-1/2 sm:w-full" v-for="item in [1, 2, 3]">
         <div class="border border-borderColor rounded p-4 flex flex-col gap-3 ">
            <p>استان فارس - شهرستان رستم - شهر مصیری - روستای شوسنی - منزل غضنفر اشرافی</p>
            <div class="flex gap-2 items-center">
               <IconsUser />
               <p>محمد اشرافی</p>
            </div>
            <div class="flex gap-2 items-center">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                     d="M17.6569 5.35098V5.35098C20.7811 8.48993 20.7811 13.5636 17.6569 16.7025V16.7025L14.345 20.0254C13.056 21.3205 10.9611 21.3254 9.666 20.0364L9.655 20.0254L6.34313 16.7025C3.21898 13.5635 3.21895 8.48998 6.34307 5.35098V5.35098C9.45255 2.22678 14.5059 2.21485 17.6301 5.32433L17.6568 5.35098H17.6569Z"
                     stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
               </svg>
               <p>شیراز</p>
            </div>
            <div class="flex gap-2 items-center">
               <IconsPhone />
               <p>09922040907</p>
            </div>
            <div class="w-full justify-end flex gap-2">
               <BaseButton size="sm" outline>حذف</BaseButton>
               <BaseButton size="sm" color="secondary">ویرایش</BaseButton>
               <BaseButton size="sm" color="green">آدرس فعال</BaseButton>
            </div>
         </div>
      </div>
      <div class="p-2 w-1/2 sm:w-full sm:h-[200px]">
         <PanelAddressAdd />
      </div>

   </div>
</template>