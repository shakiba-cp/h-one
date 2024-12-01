<script setup lang="ts">
import { useForm } from "vee-validate";
import * as yup from "yup";
const strongRegex = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"
);
const { errors, handleSubmit, defineField } = useForm({
  validationSchema: yup.object({
    oldPass: yup.string().required("رمز عبور قبلی الزامی است"),
    password: yup.string().required("رمز عبور الزامی است"),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password")], "رمز عبور مطابقت ندارد "),
  }),
});

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
});

const [oldPass, oldPassAttrs] = defineField("oldPass");
const [password, passwordAttrs] = defineField("password");
const [passwordConfirmation, passwordConfirmationAttrs] = defineField(
  "passwordConfirmation"
);
</script>

<template>
  <form @submit="onSubmit" class="grid grid-cols-2 gap-5">
    <div class="col-span-2">
      <DashboardPageTitle title="تغییر کلمه عبور" :has-button="false" />
    </div>

    <div class="felx flex-col">
      <span>
        <span>کلمه عبور فعلی </span>
        
      </span>
      <div
        class="flex pr-2 focus:border-[#e8e8e8] rounded-md bg-[#f2f2f2] transition-all duration-150"
      >
        <img src=https://ibolak.com/assets/icons/password-input.svg alt="" />
        <input
          type="text"
          v-model="oldPass"
          v-bind="oldPassAttrs"
          class="bg-transparent"
        />
      </div>
      <div class="text-red-700">{{ errors.oldPass }}</div>
    </div>
    <div class="felx flex-col">
      <span>
        <span>کلمه عبور جدید </span>

        
      </span>
      <div
        class="flex pr-2 focus:border-[#e8e8e8] rounded-md bg-[#f2f2f2] transition-all duration-150"
      >
        <img src=https://ibolak.com/assets/icons/password-input.svg alt="" />

        <input
          type="text"
          v-model="password"
          v-bind="passwordAttrs"
          class="bg-transparent"
        />
      </div>
      <div class="text-red-700">{{ errors.password }}</div>

      <!-- شماره تلفن همراه -->
    </div>
    <div class="felx flex-col">
      <span>
        <span>تایید کلمه عبور جدید </span>

        
      </span>
      <div
        class="flex pr-2 focus:border-[#e8e8e8] rounded-md bg-[#f2f2f2] transition-all duration-150"
      >
        <img src=https://ibolak.com/assets/icons/password-input.svg alt="" />

        <input
          type="text"
          v-model="passwordConfirmation"
          v-bind="passwordConfirmationAttrs"
          class="bg-transparent"
        />
      </div>
      <div class="text-red-700">{{ errors.passwordConfirmation }}</div>
    </div>

    <div class="col-span-2 flex justify-end">
      <button
        class="bg-yellow-300 hover:bg-yellow-500 rounded-md border border-white px-4 py-4 cursor-pointer"
        type="submit"
      >
        تغییر کلمه عبور
      </button>
    </div>
  </form>
</template>
