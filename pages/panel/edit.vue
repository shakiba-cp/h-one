<template>
  <div>
    <div class="col-span2">
      <DashboardPageTitle title="ویرایش حساب" :has-button="false" />
    </div>
    <UserPanelEditUserForm />
    <UserPanelEditPasword />
  </div>
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
