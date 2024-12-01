<script setup lang="ts">
import { Form } from "vee-validate";
import * as yup from "yup";

 const  validationSchema= yup.object().shape({
    email: yup.string().email("ایمیل نامعتبر است"),
    phoneNumber: yup
      .string()
      .required("شماره همراه الزامی است")
      //@ts-ignore
      .phoneNumber(),
    firstName: yup.string().required("فیلد نام الزامی است"),
    lastName: yup.string().required("فیلد نام خانوادگی الزامی است"),
  });


const onSubmit =(values:any) => {
  alert(JSON.stringify(values, null, 2));
};

// const [email, emailAttrs] = defineField("email");
// const [phoneNumber, phoneNumberAttrs] = defineField("phoneNumber");
// const [firstName, firstNameAttrs] = defineField("firstName");
// const [lastName, lastNameAttrs] = defineField("lastName");
const model=reactive({
  firstName:"",
  lastName:"",
  email:"",
  phoneNumber:""
})
</script>

<template>
  <Form :validation-schema="validationSchema" @submit="onSubmit"  class="grid grid-cols-2 gap-5">
    <div class="col-span2">
      <DashboardPageTitle title="ویرایش حساب" :has-button="false" />
    </div>
    <div class="col-span-2 items-center justify-center flex flex-col">
      <img src="/iamges/avatars/1.svg" class="w-[150px] h-[150px] rounded" />
      <label
        for="imageUploader"
        class="bg-yellow-300 hover:bg-yellow-500 rounded-md border border-white px-4 py-4 cursor-pointer"
      >
        <input id="imageUploader" type="file" class="hidden" />
        آپلود عکس
      </label>
    </div>
    <div class="felx flex-col">
      <span>
        <span>نام (فارسی) </span>
        <span class="text-red-700"> *</span>
      </span>
      <div
        class="flex pr-2 focus:border-[#e8e8e8] rounded-md bg-[#f2f2f2] transition-all duration-150"
      >
    <BaseInput name="firstName" v-model="model.firstName" placeholder="نام و نام خانوادگی خود را وارد نمایید..."/>
      </div>
      <div class="text-red-700">{{ errors.firstName }}</div>
    </div>
    <div class="felx flex-col">
      <span>
        <span>نام خانوادگی (فارسی) </span>
        <span class="text-red-700"> *</span>
      </span>
      <div
        class="flex pr-2 focus:border-[#e8e8e8] rounded-md bg-[#f2f2f2] transition-all duration-150"
      >
        <BaseInput name="lastName" v-model="model.lastName"   placeholder="نام و نام خانوادگی خود را وارد نمایید..."/>
      </div>
    </div>
    <div class="felx flex-col">
      <span>
        <span> شماره تلفن همراه </span>
        <span class="text-red-700"> *</span>
      </span>
      <div
        class="flex pr-2 focus:border-[#e8e8e8] rounded-md bg-[#f2f2f2] transition-all duration-150"
      >
        <BaseInput name="phoneNumber" v-model="model.phoneNumber"   placeholder="."/>
      </div>
    </div>
    <div class="felx flex-col">
      <span>
        <span> آدرس ایمیل (اختیاری) </span>
        <span class="text-red-700"> *</span>
      </span>
      <div
        class="flex pr-2 focus:border-[#e8e8e8] rounded-md bg-[#f2f2f2] transition-all duration-150"
      >
        <img src="https://ibolak.com/assets/icons/email-input.svg" alt="" />
        <input type="text" v-model="email" v-bind="emailAttrs"
        
        
        placeholder=" آدرس ایمیل خود را وارد نمایید...."
        
         class="bg-transparent" />
      </div>
      <div class="text-red-700">{{ errors.email }}</div>
    </div>

    <div class="col-span-2 flex justify-end">
      <button
        class="bg-yellow-300 hover:bg-yellow-500 rounded-md border border-white px-4 py-4 cursor-pointer"
        type="submit"
      >
        ثبت اطلاعات
      </button>
    </div>
  </form>
</template>
