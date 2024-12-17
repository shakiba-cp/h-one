import type { Address } from "~/models/Address";

export const GetCurrentUser = () => {
  return CustomFetch("/profile/my-info", {
    method: "POST",
  });
};

export const EditUserInfo = (phone: string, name: string) => {
  return CustomFetch("/profile/update-info", {
    method: "POST",
    body: {
      phone,
      name,
    },
  });
};
export const GetAddresses = () => {
  return CustomFetch<Address[]>("/profile/addresses/my-addresses", {
    method: "POST",
  });
};
export const AddAddress = (command: Address) => {
  return CustomFetch("/profile/addresses/add-address", {
    method: "POST",
    body: command,
  });
};
export const EditAddress = (command: Address) => {
  return CustomFetch("/profile/addresses/update-address", {
    method: "POST",
    body: command,
  });
};

export const RemoveAddress = (id: number) => {
  return CustomFetch("/profile/addresses/remove-address", {
    method: "POST",
    body: {
      address_id: id,
    },
  });
};
