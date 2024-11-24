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
          <div class="flex flex-col gap-4 w-full pt-4">
            <BaseCheckBox label="پاییز" name="test" />
            <BaseCheckBox label="زمستان" name="test" />
          </div>
        </div>
        <div class="card">
          <div class="header">
            <p class="title">محدوده قیمت</p>
          </div>
          <div class="flex flex-col gap-4 w-full pt-4">
            <BaseRangeSlider style="width: 100%" :min="0" :max="10000000" :step="10000" v-model="data" />
            <div class="flex justify-between gap-3">
              <div class="flex gap-2 items-center">
                <p>از</p>
                <BaseSplitNumberInput v-model="start" name="from" />
              </div>
              <div class="flex gap-2 items-center">
                <p>تا</p>
                <BaseSplitNumberInput v-model="end" name="to" />
              </div>
            </div>
          </div>
        </div>
      </aside>
      <section class="content  w-[75%]">
        <div class="card flex items-start py-4 justify-between gap-3">
          <div class="flex tabs items-center gap-4">
            <p class="text-muted">مرتب‌سازی بر اساس:</p>
            <button @click="selectedTab = 0" :class="{ 'active': selectedTab == 0 }">جدیدترین</button>
            <button @click="selectedTab = 1" :class="{ 'active': selectedTab == 1 }">ارزان‌ترین</button>
            <button @click="selectedTab = 2" :class="{ 'active': selectedTab == 2 }">گران‌ترین</button>
            <button @click="selectedTab = 3" :class="{ 'active': selectedTab == 3 }">محبوب‌ترین</button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
const start = ref("0")
const end = ref("10000000")
const data = ref(["0", "10000000"]);
const selectedTab = ref(0)
watch(data, () => {
  start.value = data.value[0].toString();
  end.value = data.value[1].toString();
})
</script>

<style scoped lang="scss">
.tabs {
  button.active {
    @apply text-primary relative;

    &::after {
      content: " ";
      position: absolute;
      right: 0;
      bottom: -1.45rem;
      width: 100%;
      height: 2px;
      border-radius: 3px;
      background: var(--color-primary);
    }
  }
}
</style>