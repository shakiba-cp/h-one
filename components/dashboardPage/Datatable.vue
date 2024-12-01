<template>
  <DataTable :value="value" tableStyle="max-width: 100%">
    <Column
      v-for="(header, i) in headers"
      headerStyle="font-weight:400"
      :field="header.field"
      :header="header.header"
      :key="i"
    ></Column>
  </DataTable>
</template>

<script setup>
defineProps({
  value: { type: Array, default: () => [] },
  headers: { type: Array, default: () => [] },
});
</script>

<style>
.p-datatable-column-title {
  font-weight: 400;
}
.emptymessagecell {
  border: none;
}
.p-datatable-tbody > tr > td {
  border: none;
}
.p-datatable-header-cell {
  border: none;
}
</style>
