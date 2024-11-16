import { URLfix } from "@persian-tools/persian-tools";

export const IsImageFile = (imageName: string): boolean => {
  return (
    imageName.endsWith(".png") ||
    imageName.endsWith(".jpg") ||
    imageName.endsWith(".jpeg")
  );
};
export const HaveUpperCaseLetter = (text: string): boolean => {
  var res = /[A-Z]/.test(URLfix(text)!);
  return res;
};
export const IsValidEmail = (input: string): boolean => {
  if (!input) return false;
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.match(validRegex)) {
    return true;
  }
  return false;
};
export const SplitCardNumber = (cardNumber: string) => {
  if (cardNumber.length > 4 && cardNumber.length <= 8) {
    return cardNumber.replace(/(\d{0,4})/, "$1-");
  } else if (cardNumber.length > 8 && cardNumber.length <= 12) {
    return cardNumber.replace(/(\d{0,4})(\d{0,4})(\d{0,4})/, "$1-$2-$3");
  } else if (cardNumber.length > 12) {
    return cardNumber.replace(
      /(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/,
      "$1-$2-$3-$4"
    );
  }
  return cardNumber;
};
export const getFileType = (file: string): string => {
  var items = file.split(".");
  return file[items.length - 1];
};
export const newGuid = () => {
  let s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  return (
    s4() +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    s4() +
    s4()
  );
};
export function replaceAt(
  mainData: string,
  index: number,
  replacement: string
): string {
  var res =
    mainData.substring(0, index) +
    replacement +
    mainData.substring(index + replacement.length);
  return res;
}
export const removeHtmlTagsFromString = (input: string) => {
  return input
    .replace(/<.*?>/gi, " ")
    .replace("&zwnj;", " ")
    .replace(";&zwnj", " ")
    .replace("&nbsp;", " ");
};
