<template>
  <Form :validation-schema="schema" @submit="sumbitForm" v-slot="{ meta }" :class="{ 'card-loading': loading }"
    class="flex flex-wrap">
    <div class="p-2 w-full">
      <BaseInput v-model="data.name" name="title" label="عنوان آدرس" placeholder="عنوان را وارد کنید" />
    </div>
    <div class="p-2 w-1/2">
      <BaseInput v-model="data.province" name="province" label="استان" placeholder="استان را وارد کنید" />
    </div>
    <div class="p-2 w-1/2">
      <BaseInput v-model="data.city" name="city" label="شهر" placeholder="شهر را وارد کنید" />
    </div>
    <div class="p-2 w-full">
      <BaseInput v-model="data.address" name="address" label="آدرس پستی" placeholder="آدرس را وارد کنید" />
    </div>
    <div class="p-2 w-full">
      <BaseInput v-model="data.postal_code" number name="postal_code" label="کدپستی"
        placeholder="کدپستی را وارد کنید" />
    </div>
    <div class="p-2 w-1/2">
      <BaseInput v-model="data.receiver_name" name="receiver_name" label="نام گیرنده"
        placeholder="نام  گیرنده را وارد کنید" />
    </div>
    <div class="p-2 w-1/2">
      <BaseInput v-model="data.receiver_phone" name="receiver_phone" label="تلفن گیرنده"
        placeholder="تلفن  گیرنده را وارد کنید" />
    </div>
    <div class="flex justify-end w-full">
      <BaseButton :loading="loading" type="submit" :disabled="!meta.valid">ویرایش آدرس</BaseButton>
    </div>
  </Form>
</template>

<script lang="ts" setup>
import { Form } from 'vee-validate';
import * as Yup from 'yup'
import type { Address } from '~/models/Address';
import { EditAddress } from '~/services/profile.service';
const loading = ref(false);
const toast = useToast();
const emit = defineEmits(['success']);
const { address } = defineProps<{
  address: Address
}>();
const data = reactive<Address>({
  address: address.address,
  address_id: address.id,
  city: address.city,
  name: address.name,
  postal_code: address.postal_code,
  province: address.province,
  receiver_name: address.receiver_name,
  receiver_phone: address.receiver_phone,
  id: undefined
});
const schema = Yup.object().shape({
  address: Yup.string().required().label("آدرس پستی").min(5, "آدرس نامعتبر است"),
  city: Yup.string().required().label("شهر"),
  title: Yup.string().required().label("عنوان"),
  postal_code: Yup.string().required().label("کدپستی"),
  province: Yup.string().required().label("استان"),
  receiver_name: Yup.string().required().label("نام گیرنده"),
  //@ts-ignore
  receiver_phone: Yup.string().required().phoneNumber().label("تلفن گیرنده")
})

const sumbitForm = async () => {
  loading.value = true;
  var res = await EditAddress(data);
  if (res.isSuccess) {
    toast.showToast("آدرس با موفقیت ویرایش شد");
    emit('success');
  }
  loading.value = false;
}
</script>
