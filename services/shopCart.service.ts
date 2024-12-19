import type { ShopCartItem } from "~/models/ShopCartItem";

export const AddToCart = (id: number) => {
  return CustomFetch("/shop/cart/add-cart", {
    method: "POST",
    body: {
      attribute_id: id,
    },
  });
};
export const IncreaseCartItem = (id: number) => {
  return CustomFetch("/shop/cart/plus-cart", {
    method: "POST",
    body: {
      cart_id: id,
    },
  });
};
export const DecreaseCartItem = (id: number) => {
  return CustomFetch("/shop/cart/minus-cart", {
    method: "POST",
    body: {
      cart_id: id,
    },
  });
};
export const RemoveCartItem = (id: number) => {
  return CustomFetch("/shop/cart/remove-cart", {
    method: "POST",
    body: {
      cart_id: id,
    },
  });
};
export const GetCurrentShopingCart = () => {
  return CustomFetch<ShopCartItem[]>("/shop/cart/my-cart", {
    method: "POST",
  });
};
