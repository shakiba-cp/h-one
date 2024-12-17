<template>
  <Form v-slot="{meta}" :validation-schema="validationSchema" @submit="onSubmit" class="grid grid-cols-2 gap-5"
    :class="{ 'card-loading': loading }">
    <BaseInput name="fullName" 
    label="نام و نام خانوادگی (فارسی) " v-model="fullName"
    :value="fullName"
      placeholder="نام  خود را وارد نمایید...">
      <template #icon>
        <IconsUser />
      </template>
    </BaseInput>
    <BaseInput disabled :value="authStore.userData?.phone" placeholder="شماره تلفن همراه خود را وارد کنید"
      name="phoneNumber" label="شماره تلفن همراه ">
      <template #icon>
        <IconsPhone />
      </template>
    </BaseInput>
    <div class="col-span-2 flex justify-end">
      <BaseButton :disabled="!meta.valid" :loading="loading" type="submut">ثبت اطلاعات</BaseButton>
    </div>
  </Form>
</template>
<script setup lang="ts">
import { Form } from "vee-validate";
import * as yup from "yup";
import { EditUserInfo } from "~/services/profile.service";

const authStore = useAuthStore();
const loading = ref(false);
const fullName = ref(authStore.userData?.name ?? '');
const validationSchema = yup.object().shape({
  fullName: yup.string().required().label('نام و نام خانوادگی'),
});
const toast = useToast();
const onSubmit = async () => {
  loading.value = true;
  var res = await EditUserInfo(authStore.userData!.phone, fullName.value);
  if (res.isSuccess) {
    authStore.userData!.name = fullName.value;
    toast.showToast();
  }
  loading.value = false;

};

</script>