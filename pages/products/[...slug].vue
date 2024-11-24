<template>
  <div class="container">
    <div class="flex gap-5">
      <aside class="w-[25%] flex flex-col gap-4">
        <div class="card">
          <div class="header">
            <p class=" title">فیلتر‌های اعمال‌شده</p>
            <button class="text-primary">حذف فیلترها</button>
          </div>
          <div class="flex gap-2 flex-wrap mt-2">
            <button :key="item"
              class="flex min-w-fit hover:text-primary transition-all items-center gap-2 rounded border border-borderColor px-3 py-2"
              v-for="item in ['رایحه: شیرین', 'فصل: زمستان', 'سایز : xl']">
              {{ item }}
              <IconsRemove width="14" height="14" />
            </button>
          </div>
        </div>
        <div class="card">
          <div class="header">
            <p class="title">فصل مناسب</p>
          </div>
          <div class="flex flex-col gap-4 w-full pb-2">
            <BaseCheckBox label="پاییز" name="test" />
            <BaseCheckBox label="زمستان" name="test" />
          </div>
        </div>
      </aside>
      <section class="content card w-[75%]"></section>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>