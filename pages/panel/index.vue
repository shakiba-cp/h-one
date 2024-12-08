<template>
  <div>
    <div class="flex gap-4">
      <h4>آخرین سفارش‌ها</h4>
    </div>
    <div class="table-container mt-3">
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
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "panel"
})
</script>

<style></style>