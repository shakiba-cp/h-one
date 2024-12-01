<template>
  <form @submit="edituser" class="grid grid-cols-2 gap-5">
    <div class="col-span2">
      <DashboardPageTitle title="ویرایش حساب" :has-button="false" />
    </div>
    <div class="col-span-2 items-center justify-center flex flex-col">
      <img src="/iamges/avatars/1.svg" class="w-[150px] h-[150px] rounded" />
      <label for="imageUploader"
        class="bg-yellow-300 hover:bg-yellow-500 rounded-md border border-white px-4 py-4 cursor-pointer">
        <input id="imageUploader" type="file" class="hidden" />
        آپلود عکس
      </label>
    </div>

    <div class="felx flex-col">
      <span>
        <span>نام (فارسی) </span>
        <span class="text-red-700"> *</span>
      </span>
      <div class="flex pr-2 focus:border-[#e8e8e8] rounded-md bg-[#f2f2f2] transition-all duration-150">
        <img src="https://ibolak.com/assets/icons/name-input.svg" alt="" />

        <Input type="text" v-model="UserData.name" name="username" class="bg-transparent"
          placeholder="نام و نام خانوادگی خود را وارد نمایید..." />
      </div>

    </div>
    <div class="felx flex-col">
      <span>
        <span>نام خانوادگی (فارسی) </span>
        <span class="text-red-700"> *</span>
      </span>
      <div class="flex pr-2 focus:border-[#e8e8e8] rounded-md bg-[#f2f2f2] transition-all duration-150">
        <img src="https://ibolak.com/assets/icons/family-input.svg" alt="" />

        <BaseInput type="text" v-model="UserData.family" name="family" class="bg-transparent"
          placeholder="نام و نام خانوادگی خود را وارد نمایید..." />
      </div>


      <!-- شماره تلفن همراه -->
    </div>
    <div class="felx flex-col">
      <span>
        <span> شماره تلفن همراه </span>
        <span class="text-red-700"> *</span>
      </span>
      <div class="flex pr-2 focus:border-[#e8e8e8] rounded-md bg-[#f2f2f2] transition-all duration-150">
        <img src="https://ibolak.com/assets/icons/phone-input.svg" alt="" />

        <input type="text" v-model="UserData.PhoneNumber" name="PhoneNumber"
          placeholder=" شماره تلفن همراه خود را وارد نمایید...." class="bg-transparent" />
      </div>

    </div>
    <div class="felx flex-col">
      <span>
        <span> آدرس ایمیل (اختیاری) </span>
        <span class="text-red-700"> *</span>
      </span>
      <div class="flex pr-2 focus:border-[#e8e8e8] rounded-md bg-[#f2f2f2] transition-all duration-150">
        <img src="https://ibolak.com/assets/icons/email-input.svg" alt="" />
        <input type="text" v-model="UserData.email" name="email" placeholder=" آدرس ایمیل خود را وارد نمایید...."
          class="bg-transparent" />
      </div>

    </div>

    <div class="col-span-2 flex justify-end">
      <button :loading="loading"
        class="bg-yellow-300 hover:bg-yellow-500 rounded-md border border-white px-4 py-4 cursor-pointer" type="submit">
        ثبت اطلاعات
      </button>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { Form } from 'vee-validate';
import * as yup from "yup";
definePageMeta({
  layout: "panel"
});
const loading = ref(false);
const UserData = reactive({
  name: "",
  family: "",
  email: "",
  PhoneNumber: "",
  file: ""
});

const validationSchema = yup.object().shape({
  name: yup.string().required().label('نام'),
  family: yup.string().required().label(' نام خانوادگی'),
  email: yup.string().email().required().label(' ایمیل'),
  PhoneNumber: yup.string().required().label('شماره تلفن')
})


const router = useRouter();
const edituser = async () => {
  var formData = new FormData();
  formData.append("name", UserData.name),
    formData.append("name", UserData.family),
    formData.append("name", UserData.PhoneNumber),
    formData.append("name", UserData.email);



  loading.value = true;
  // var result = await Edituser(formData);
  loading.value = false;
  // if (result.isSuccess) {
  //   router.push('/panel');
  // }

}
onMounted(() => {

})


</script>

<style></style>
