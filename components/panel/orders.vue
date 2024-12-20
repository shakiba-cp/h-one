<template>
   <div>
      <div class="table-container">
         <table>
            <thead>
               <tr>
                  <th>#</th>
                  <th>تاریخ</th>
                  <th>مبلغ</th>
                  <th>وضعیت ارسال</th>
                  <th>عملیات</th>
               </tr>
            </thead>
            <tbody>
               <tr v-if="loading">
                  <td>
                     <BaseSkeletonLoaidng width="30px" height="10px" />
                  </td>
                  <td>
                     <BaseSkeletonLoaidng width="50px" height="10px" />

                  </td>
                  <td>
                     <BaseSkeletonLoaidng width="50px" height="10px" />
                  </td>
                  <td>
                     <BaseSkeletonLoaidng width="70px" height="10px" />

                  </td>
                  <td>
                     <BaseSkeletonLoaidng width="55px" height="30px" />
                  </td>
               </tr>
               <tr v-for="item in utilStore.orders" :key="item.id">
                  <td>{{ item.id }}</td>
                  <td>{{ getPersianDate(new Date(item.payemntInfo.created_at)) }}</td>
                  <td>{{ Number(item.final_price).toLocaleString() }} تومان</td>
                  <td>
                     <span class="text-green" v-if="item.deliver_status == 1">ارسال شده</span>
                     <span class="text-blue-500" v-else>درحال برسی</span>
                  </td>
                  <td>
                     <BaseButton @click="showOrder(item)" size="sm">نمایش</BaseButton>
                  </td>
               </tr>
            </tbody>
         </table>
      </div>

      <BaseModal v-model="isOpenOrderModal" title="جزئیات سفارش">
         <div>
            <div class="border rounded border-borderColor p-2">
               <div class="flex justify-between border-b border-borderColor py-2">
                  <p>مبلغ سفارش</p>
                  <p>{{ Number(selectedOrder?.order_price).toLocaleString() }} تومان</p>
               </div>
               <div class="flex justify-between border-b border-borderColor py-2">
                  <p>هزینه ارسال</p>
                  <p v-if="selectedOrder!.shipping == 1">49,000 تومان</p>
                  <p v-else>پس کرایه(0 تومان)</p>
               </div>
               <div class="flex justify-between border-b border-borderColor py-2">
                  <p>تخفیف</p>
                  <p>{{ Number(selectedOrder?.off_price).toLocaleString() }} تومان</p>
               </div>
               <div class="flex justify-between border-b border-borderColor py-2">
                  <p>مبلغ پرداخت شده</p>
                  <p>{{ Number(selectedOrder?.final_price).toLocaleString() }} تومان</p>
               </div>
               <div class="flex justify-between border-b border-borderColor py-2 gap-2">
                  <p>آدرس سفارش :</p>
                  <p>{{ selectedOrder!.address }}</p>
               </div>
               <div class="flex justify-between border-b border-borderColor py-2 gap-2">
                  <p>روش ارسال</p>
                  <p>
                     <span v-if="selectedOrder!.shipping == 0">تیپاکس</span>
                     <span v-else>پست پیشتاز</span>
                  </p>
               </div>
               <div class="flex justify-between py-2">
                  <p>وضغیت ارسال</p>
                  <span class="text-green" v-if="selectedOrder!.deliver_status == 1">ارسال شده</span>
                  <span class="text-blue-500" v-else>درحال برسی</span>
               </div>
            </div>
            <br />
            <h4>کالا‌های سفارشی</h4>
            <div class="flex flex-col gap-2">
               <div v-for="item in selectedOrder?.items" :key="item.id"
                  class="flex gap-2 justify-between items-center mb-4 pb-4 border-b last:border-none last:mb-0 last:pb-0 border-borderColor">
                  <div class="flex justify-start flex-grow flex-col">
                     <p class="text-h5 mb-3">{{ item.product_name
                        }}</p>
                     <span>{{ item.entity }} عدید</span>
                  </div>
                  <div class="">
                     <div class="flex items-center gap-2 sm:flex-wrap sm:justify-end">
                        <div class="bg-lightSecondary text-h7 p-2 rounded-sm">
                           رنگ : {{ item.product_color }}
                        </div>
                        <div class="bg-lightSecondary text-h7 p-2 rounded-sm">
                           سایز : {{ item.product_size }}
                        </div>
                     </div>
                     <div class="text-left mt-2">
                        <del v-if="+item.off_amount > 0">{{ (+item.off_amount).toLocaleString() }}</del>
                        <p class="text-primary"><b>{{ Number(item.price).toLocaleString() }}</b>تومان</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </BaseModal>
   </div>
</template>
<script setup lang="ts">
import type { Order } from "~/models/Order"
const utilStore = useUtilStore();
const loading = ref(false);
const selectedOrder: Ref<Order | null> = ref(null);
const isOpenOrderModal = ref(false);

const showOrder = (order: Order) => {
   isOpenOrderModal.value = true;
   selectedOrder.value = order;
}

onMounted(async () => {
   if (utilStore.orders.length === 0) {
      loading.value = true;
      var res = await CustomFetch("/shop/orders/my-orders", {
         method: "POST"
      });
      loading.value = false;
      utilStore.orders = res.data as [];
   }
})
</script>