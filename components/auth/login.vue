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
      <div class="flex flex-col gap-3" v-else :class="{ 'card-loading': loading }">
        <p>کد تایید :</p>
        <BaseStepInput :length="4" />
        <BaseButton @click="login" class="w-full mt-2">ثبت و ورود به سایت</BaseButton>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { Form } from 'vee-validate';
import * as Yup from 'yup'
import { checkPhone } from '~/services/auth.service';
const schema = Yup.object().shape({
  //@ts-ignore
  phoneNumber: Yup.string().phoneNumber().required()
    .label('شماره موبایل'),

});
const authStore = useAuthStore();
const toast = useToast();
const router = useRouter();
const password = ref('');
const loading = ref(false);

const validate = async () => {
  loading.value = true;
  var res = await checkPhone(authStore.phoneNumber);
  if (res.isSuccess) {
    authStore.changeStep('code');
  }
}
const login = () => {
  router.push('/panel');
  authStore.isOpenModal = false;
}
</script>

<style></style>