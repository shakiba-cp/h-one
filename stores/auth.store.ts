import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  const isOpenModal = ref(false);
  const currentStep = ref("phoneNumber");
  const callBackFunctionAfterLogin: Ref<Function | null> = ref(null);
  const phoneNumber = ref("");
  //   const registerData: Ref<RegisterCommand | null> = ref(null);

  const getAccessToken = () => {
    var cookie = useCookie("c-access-token", {
      watch: false,
      expires: new Date(new Date().setDate(new Date().getDate() + 30)),
    });
    return cookie.value;
  };
  const isLogin = computed(() => {
    var cookie = getAccessToken();
    return cookie != null && cookie != "";
  });
  //   const setToken = (tokenResult: LoginResult) => {
  //     var cookie = useCookie("c-access-token", {
  //       expires: new Date(new Date().setDate(new Date().getDate() + 30)),
  //     });
  //     var refreshCookie = useCookie("c-refresh-token", {
  //       expires: new Date(new Date().setDate(new Date().getDate() + 30)),
  //     });
  //     cookie.value = tokenResult.token;
  //     refreshCookie.value = tokenResult.refreshToken;
  //     setTimeout(() => {
  //       if (
  //         callBackFunctionAfterLogin.value != null &&
  //         callBackFunctionAfterLogin.value != undefined
  //       ) {
  //         callBackFunctionAfterLogin.value!();
  //       }
  //     }, 300);
  //   };
  const logOut = async () => {
    //  var res = await LogoutUser();
    //  if (res.isSuccess) {
    //    var cookie = useCookie("c-access-token");
    //    var refreshCookie = useCookie("c-refresh-token");
    //    cookie.value = null;
    //    refreshCookie.value = null;
    //    location.reload();
    //  }
  };
  const changeStep = (step: "phoneNumber" | "code") => {
    currentStep.value = step;
  };
  const openLoginModal = (fn: Function | null = null) => {
    currentStep.value = "phoneNumber";
    isOpenModal.value = true;
    callBackFunctionAfterLogin.value = fn;
  };
  return {
    isOpenModal,
    isLogin,
    changeStep,
    currentStep,
    //  registerData,
    openLoginModal,
    phoneNumber,
    //  setToken,
    logOut,
    getAccessToken,
  };
});
