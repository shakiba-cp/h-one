<template>
  <div>
    <div class="">
      <PanelPageTitle title="سفارش‌ها" />
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>تاریخ</th>
              <th>مبلغ</th>
              <th>وضعیت</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in [1, 2, 3]" :key="item">
              <td>{{ item }}</td>
              <td>1400/05/04</td>
              <td>1,500 تومان</td>
              <td>فعال</td>
              <td>
                <BaseButton size="sm">نمایش</BaseButton>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "panel"
})
</script>

<style></style>