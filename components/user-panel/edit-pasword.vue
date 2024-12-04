<script setup lang="ts">
import { useForm } from "vee-validate";
import * as yup from "yup";

const { errors, handleSubmit, defineField } = useForm({
  validationSchema: yup.object({
    oldPass: yup.string().required().label("رمز عبور قبلی"),
    password: yup.string().required()
      .min(6)
      .label('رمز عبور'),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password")], "رمز عبور مطابقت ندارد "),
  }),
});
const data = reactive({
  oldPassword: "",
  password: "",
  confirmPassword: ""
});
const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
});
</script>

<template>
  <form @submit="onSubmit" class="flex flex-col gap-5">
    <div class="col-span-2">
      <DashboardPageTitle title="تغییر کلمه عبور" :has-button="false" />
    </div>
    <BaseInputPassword class="w-full" name="oldPass" v-model="data.oldPassword" label="کلمه عبور فعلی " />
    <div class="flex gap-5 sm:flex-wrap">
      <BaseInputPassword class="w-full" name="password" v-model="data.password" label="کلمه عبور فعلی " />
      <BaseInputPassword class="w-full" name="passwordConfirmation" v-model="data.confirmPassword"
        label="کلمه عبور فعلی " />
    </div>
    <div class="col-span-2 flex justify-end">
     <BaseButton>تغییر کلمه عبور</BaseButton>
    </div>
  </form>
</template>
