<template>
  <Form :validation-schema="validationSchema" @submit="onSubmit" class="grid grid-cols-2 gap-5">
    <div class="col-span-2 items-center justify-center flex flex-col">
      <img src="/iamges/avatars/1.svg" class="w-[150px] h-[150px]  rounded mb-2" />
      <BaseButton color="secondary"> آپلود عکس</BaseButton>
    </div>


    <BaseInput name="firstName" label="نام (فارسی) " v-model="model.firstName" placeholder="نام  خود را وارد نمایید...">
      <template #icon>
        <IconsUser />
      </template>
    </BaseInput>

    <BaseInput required placeholder="نام خانوادگی خود را وارد نمایید.." name="lastName" v-model="model.lastName"
      label="نام خانوادگی (فارسی) ">
      <template #icon>
        <IconsUsers />
      </template>
    </BaseInput>
    <BaseInput required placeholder="شماره تلفن همراه خود را وارد کنید" name="phoneNumber" v-model="model.phoneNumber"
      label="شماره تلفن همراه ">
      <template #icon>
        <IconsPhone />
      </template>
    </BaseInput>
    <BaseInput name="email" v-model="model.email" placeholder="آدرس ایمیل خود را وارد کنید" label="ایمیل">
      <template #icon>
        <IconsEmail />
      </template>
    </BaseInput>

    <div class="col-span-2 flex justify-end">
      <BaseButton type="submut">ثبت اطلاعات</BaseButton>
    </div>
  </form>
</template>
<script setup lang="ts">
import { Form } from "vee-validate";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  email: yup.string().email().label('ایمیل'),
  phoneNumber: yup
    .string()
    .required()
    //@ts-ignore
    .phoneNumber().label('شماره تلفن'),
  firstName: yup.string().required().label('نام '),
  lastName: yup.string().required().label('نام خانوادگی'),
});
const onSubmit = (values: any) => {
  alert(JSON.stringify(values, null, 2));
};
const model = reactive({
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: ""
})
</script>