<template>
  <div class="absolute z-[0] h-[100px] inset-x-0 top-0 bg-[#ecebe9] rounded-t-md"></div>
<div  class="m-4 user-box-shadow  bg-white relative z-10 flex px-6 py-8 rounded-md flex-col gap-2">
    <span
      class="absolute top-0 left-0 rounded-tl-md rounded-br-md py-3 px-2 bg-[#fef2d0]"
    >
      0
    </span>
    <div class="flex gap-2">
      <div class="flex aspect-square w-14">
        <img
          src="https://ibolak.com/demo1/media/svg/avatars/blank.svg?v=1732548350"
          alt=""
        />
      </div>
      <div class="flex flex-col">
        <p>تست</p>
        <p><span>موجودی:</span> <span> 0 تومان</span></p>
      </div>
    </div>
    <BaseButton color="light">
      افزایش اعتبار
      <template #icon>
        <img src="https://ibolak.com/assets/icons/wallet.svg" alt="basket icon" />
      </template>
    </BaseButton>
  </div>
</template>

<style scoped>
.user-box-shadow {
  box-shadow: 0px 21px 20px 0px rgba(250, 250, 250, 1);
}
</style>
