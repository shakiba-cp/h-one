import { AppStatusCode, type ApiResponse } from "~/models/ApiResponse";
import type { FetchConfig } from "~/models/config/fetchConfig";
import type { FetchError } from "~/models/FetchError";
import { BASE_URL } from "./EnvironmentVariables";

export function CustomFetch<T>(
  url: string,
  config: FetchConfig | undefined = {},
  ignoreErrors: boolean = false
): Promise<ApiResponse<T>> {
  var newConfig: FetchConfig = {
    baseURL: BASE_URL,
    ...config,
    retry: 0,
  };
  const authStore = useAuthStore();
  if (authStore.isLogin) {
    if (!newConfig.headers) {
      newConfig.headers = {};
    }
    //@ts-ignore
    newConfig.headers["authorization"] = authStore.getAccessToken();
  }
  const shoError = (data: ApiResponse<any>) => {
    if (process.client && ignoreErrors == false) {
      const toast = useToast();
      toast.showToast(data.metaData.message, ToastType.error);
    }
  };
  //@ts-ignore
  return $fetch<ApiResponse<T>>(url, newConfig)
    .then((response: any) => {
      return {
        data: response.content.data,
        isSuccess: response.content.success,
        metaData: {
          appStatusCode: AppStatusCode.Success,
          message: "Success",
        },
      };
    })
    .catch((e: FetchError) => {
      var message = e.response._data.content?.messages;
      if (e.response._data?.message) {
        message = e.response._data?.message;
      }
      var customResponse = {
        data: undefined,
        isSuccess: false,
        metaData: {
          appStatusCode:
            e.response._data?.metaData?.appStatusCode ??
            AppStatusCode.ServerError,
          message: message ?? "خطای سمت سرور",
        },
      } as ApiResponse<undefined>;
      switch (e.response.status) {
        case 400: {
          customResponse.metaData.message = message ?? "اطلاعات نامعتبر است";
          break;
        }
        case 401: {
          customResponse.metaData.message = message ?? "دسترسی غیرمجاز";
          break;
        }
        case 404: {
          customResponse.metaData.message = message ?? "اطلاعات نامعتبر است";
          break;
        }
      }
      shoError(customResponse);
      return customResponse;
    });
}
