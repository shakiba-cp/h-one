<template>
  <DashboardPageTitle
    title="آخرین سفارش‌ها"
    button-title="همه سفارش ها"
    :has-button="true"
  />
  <DashboardPageDatatable :value="data" :headers="tableHeaders" />
</template>

<script setup>
const data = [];
const tableHeaders = [
  { filed: "id", header: "#" },
  { filed: "operation", header: "عملیات" },
  { filed: "opStatus", header: "وضعیت پرداخت" },
  { filed: "status", header: "وضعیت" },
  { filed: "type", header: "نوع سفارش" },
  { filed: "price", header: "مبلغ" },
  { filed: "date", header: "تاریخ" },
];
definePageMeta({
  layout: "dashboard-layout",
  
});
</script>
