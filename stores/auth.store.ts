import { defineStore } from "pinia";
import { GetCurrentUser } from "~/services/profile.service";

export const useAuthStore = defineStore("auth", () => {
  const isOpenModal = ref(false);
  const currentStep = ref("phoneNumber");
  const callBackFunctionAfterLogin: Ref<Function | null> = ref(null);
  const phoneNumber = ref("");
  const dataLoading = ref(false);
  const userData: Ref<{
    phone: string;
    name: string;
  } | null> = ref(null);
  const getAccessToken = () => {
    var cookie = useCookie("s-access-token", {
      watch: false,
    });
    return cookie.value;
  };
  const isLogin = computed(() => {
    var cookie = useCookie("s-access-token", {
      watch: true,
    });
    return cookie.value != null && cookie.value != "";
  });
  const setToken = (token: string): boolean => {
    var cookie = useCookie("s-access-token", {
      expires: new Date(new Date().setDate(new Date().getDate() + 30)),
    });
    cookie.value = token;
    if (
      callBackFunctionAfterLogin.value != null &&
      callBackFunctionAfterLogin.value != undefined
    ) {
      setTimeout(() => {
        callBackFunctionAfterLogin.value!();
      }, 300);
      return false;
    } else {
      return true;
    }
  };
  const logOut = async () => {
    var cookie = useCookie("s-access-token");
    cookie.value = null;
    userData.value = null;
  };
  const changeStep = (step: "phoneNumber" | "code") => {
    currentStep.value = step;
  };
  const openLoginModal = (fn: Function | null = null) => {
    currentStep.value = "phoneNumber";
    isOpenModal.value = true;
    callBackFunctionAfterLogin.value = fn;
  };
  const setCurrentUser = async () => {
    if (isLogin.value) {
      dataLoading.value = true;
      var res = await GetCurrentUser();
      if (res.isSuccess) {
        userData.value = res.data as any;
      }
      dataLoading.value = false;
    }
  };
  return {
    isOpenModal,
    isLogin,
    dataLoading,
    changeStep,
    currentStep,
    openLoginModal,
    phoneNumber,
    setToken,
    logOut,
    getAccessToken,
    setCurrentUser,
    userData,
  };
});
