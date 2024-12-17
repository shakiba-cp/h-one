export const checkPhone = (phone: string) => {
  return CustomFetch("/auth/check-phone", {
    method: "POST",
    body: {
      phone,
    },
  });
};
export const SendOtp = (phone: string) => {
  return CustomFetch("/auth/send-otp", {
    method: "POST",
    body: {
      phone,
    },
  });
};
export const CheckOtp = (phone: string, otp: string) => {
  return CustomFetch<string>("/auth/check-otp", {
    method: "POST",
    body: {
      phone,
      otp,
    },
  });
};
