<template>
  <UserPanelEditUserForm />
  <UserPanelEditPasword />
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
