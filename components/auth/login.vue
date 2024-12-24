<template>
  <div class="min-w-[350px]">
    <Transition name="page" mode="out-in">
      <Form v-if="authStore.currentStep == 'phoneNumber'" :class="{ 'card-loading': loading }" @submit="validate"
        :validation-schema="schema" v-slot="{ meta }">
        <BaseInput v-model="authStore.phoneNumber" :max-lenght="11" number name="phoneNumber"
          placeholder="شماره موبایل خود را وارد کنید..." label="شماره موبایل">
          <template #icon>
            <IconsPhone />
          </template>
        </BaseInput>
        <BaseButton :disabled="(meta.valid == false)" type="submit" class="w-full mt-2">ثبت و ادامه</BaseButton>
      </Form>
      <div class="flex flex-col gap-2" v-else :class="{ 'card-loading': loading }">
        <p>کد تایید :</p>
        <BaseStepInput v-model="otp" :length="4" @completed="login" />
        <BaseButton :loading="loading" @click="login" class="w-full mt-2">ثبت و ورود به سایت</BaseButton>
        <BaseButton @click="authStore.changeStep('phoneNumber')" color="info" outline class="w-full">ویرایش شماره
        </BaseButton>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { Form } from 'vee-validate';
import * as Yup from 'yup'
import { CheckOtp, checkPhone } from '~/services/auth.service';
const schema = Yup.object().shape({
  //@ts-ignore
  phoneNumber: Yup.string().phoneNumber().required()
    .label('شماره موبایل'),

});
const authStore = useAuthStore();
const toast = useToast();
const router = useRouter();
const loading = ref(false);
const otp = ref('');
const validate = async () => {
  loading.value = true;
  var res = await checkPhone(authStore.phoneNumber);
  if (res.isSuccess) {
    authStore.changeStep('code');
  }
  loading.value = false;
}
const login = async () => {
  loading.value = true;
  var res = await CheckOtp(authStore.phoneNumber, otp.value);
  if (res.isSuccess) {
    toast.showToast("ورود با موفقیت انجام شد");
    var isReturnPanel = authStore.setToken(res.data);
    authStore.isOpenModal = false;
    if (isReturnPanel) {
      router.push('/panel');
    }
  } else {
    toast.showToast("کد نامعتبر است", ToastType.error)
  }
  loading.value = false;

}
</script>

<style></style>