import { remainingTime } from "@persian-tools/persian-tools";
import { padTo2Digits } from "./numberUtils";
import moment from "moment";

export const toPersianDate = (
  date: Date,
  withTime: boolean = false,
  withDashBetweenTimeAndDate: boolean = false
): string => {
  let pDate = new Date(date).toLocaleDateString("fa-IR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  if (withTime) {
    var time = new Date(date).toLocaleTimeString("fa-IR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    if (withDashBetweenTimeAndDate) {
      return pDate + " ـ " + time;
    }
    return pDate + " " + time;
  } else {
    return pDate;
  }
};
export const TimeAgo = (date: Date) => {
  const currentDate = moment();
  const pastDate = moment(date);
  const daysPassed = currentDate.diff(pastDate, "days");
  const hoursePassed = currentDate.diff(pastDate, "hours");
  var result = "";
  if (daysPassed == 0) {
    if (hoursePassed == 0) {
      result = `لحظاتی `;
    } else {
      result = `${hoursePassed} ساعت`;
    }
  } else if (daysPassed < 29) {
    result = `${daysPassed} روز`;
  } else if (daysPassed < 360) {
    result = `${Math.floor(daysPassed / 30)} ماه`;
  } else {
    result = `${Math.floor(daysPassed / 360)} سال`;
  }
  return `${result}  پیش`;
};

export const RemainingTime = (date: Date, justByDay: boolean = true) => {
  var res = remainingTime(date);
  var days = res.days;
  if (res.months >= 1) {
    days += res.months * 30;
  }
  return `${days}`;
};
export const fixNumbers = (str: string) => {
  var persianNumbers = [
      /۰/g,
      /۱/g,
      /۲/g,
      /۳/g,
      /۴/g,
      /۵/g,
      /۶/g,
      /۷/g,
      /۸/g,
      /۹/g,
    ],
    arabicNumbers = [
      /٠/g,
      /١/g,
      /٢/g,
      /٣/g,
      /٤/g,
      /٥/g,
      /٦/g,
      /٧/g,
      /٨/g,
      /٩/g,
    ];
  if (typeof str === "string") {
    for (var i: any = 0; i < 10; i++) {
      str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
    }
  }
  return str;
};

export const getPersianDate = (date: Date, format: string | null = null) => {
  let week = new Array(
    "يكشنبه",
    "دوشنبه",
    "سه شنبه",
    "چهارشنبه",
    "پنج شنبه",
    "جمعه",
    "شنبه"
  );
  let months = new Array(
    "فروردين",
    "ارديبهشت",
    "خرداد",
    "تير",
    "مرداد",
    "شهريور",
    "مهر",
    "آبان",
    "آذر",
    "دي",
    "بهمن",
    "اسفند"
  );
  let today = new Date(date);
  let d = today.getDay();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();

  // if (process.server == false) {
  //   year = window.navigator.userAgent.indexOf("MSIE") > 0 ? year : 1900 + year;
  // }
  if (year == 0) {
    year = 2000;
  }
  if (year < 100) {
    year += 1900;
  }
  let y = 1;
  for (let i = 0; i < 3000; i += 4) {
    if (year == i) {
      y = 2;
    }
  }
  for (let i = 1; i < 3000; i += 4) {
    if (year == i) {
      y = 3;
    }
  }
  if (y == 1) {
    year -= month < 3 || (month == 3 && day < 21) ? 622 : 621;
    switch (month) {
      case 1:
        day < 21 ? ((month = 10), (day += 10)) : ((month = 11), (day -= 20));
        break;
      case 2:
        day < 20 ? ((month = 11), (day += 11)) : ((month = 12), (day -= 19));
        break;
      case 3:
        day < 21 ? ((month = 12), (day += 9)) : ((month = 1), (day -= 20));
        break;
      case 4:
        day < 21 ? ((month = 1), (day += 11)) : ((month = 2), (day -= 20));
        break;
      case 5:
      case 6:
        day < 22 ? ((month -= 3), (day += 10)) : ((month -= 2), (day -= 21));
        break;
      case 7:
      case 8:
      case 9:
        day < 23 ? ((month -= 3), (day += 9)) : ((month -= 2), (day -= 22));
        break;
      case 10:
        day < 23 ? ((month = 7), (day += 8)) : ((month = 8), (day -= 22));
        break;
      case 11:
      case 12:
        day < 22 ? ((month -= 3), (day += 9)) : ((month -= 2), (day -= 21));
        break;
      default:
        break;
    }
  }
  if (y == 2) {
    year -= month < 3 || (month == 3 && day < 20) ? 622 : 621;
    switch (month) {
      case 1:
        day < 21 ? ((month = 10), (day += 10)) : ((month = 11), (day -= 20));
        break;
      case 2:
        day < 20 ? ((month = 11), (day += 11)) : ((month = 12), (day -= 19));
        break;
      case 3:
        day < 20 ? ((month = 12), (day += 10)) : ((month = 1), (day -= 19));
        break;
      case 4:
        day < 20 ? ((month = 1), (day += 12)) : ((month = 2), (day -= 19));
        break;
      case 5:
        day < 21 ? ((month = 2), (day += 11)) : ((month = 3), (day -= 20));
        break;
      case 6:
        day < 21 ? ((month = 3), (day += 11)) : ((month = 4), (day -= 20));
        break;
      case 7:
        day < 22 ? ((month = 4), (day += 10)) : ((month = 5), (day -= 21));
        break;
      case 8:
        day < 22 ? ((month = 5), (day += 10)) : ((month = 6), (day -= 21));
        break;
      case 9:
        day < 22 ? ((month = 6), (day += 10)) : ((month = 7), (day -= 21));
        break;
      case 10:
        day < 22 ? ((month = 7), (day += 9)) : ((month = 8), (day -= 21));
        break;
      case 11:
        day < 21 ? ((month = 8), (day += 10)) : ((month = 9), (day -= 20));
        break;
      case 12:
        day < 21 ? ((month = 9), (day += 10)) : ((month = 10), (day -= 20));
        break;
      default:
        break;
    }
  }
  if (y == 3) {
    year -= month < 3 || (month == 3 && day < 21) ? 622 : 621;
    switch (month) {
      case 1:
        day < 20 ? ((month = 10), (day += 11)) : ((month = 11), (day -= 19));
        break;
      case 2:
        day < 19 ? ((month = 11), (day += 12)) : ((month = 12), (day -= 18));
        break;
      case 3:
        day < 21 ? ((month = 12), (day += 10)) : ((month = 1), (day -= 20));
        break;
      case 4:
        day < 21 ? ((month = 1), (day += 11)) : ((month = 2), (day -= 20));
        break;
      case 5:
      case 6:
        day < 22 ? ((month -= 3), (day += 10)) : ((month -= 2), (day -= 21));
        break;
      case 7:
      case 8:
      case 9:
        day < 23 ? ((month -= 3), (day += 9)) : ((month -= 2), (day -= 22));
        break;
      case 10:
        day < 23 ? ((month = 7), (day += 8)) : ((month = 8), (day -= 22));
        break;
      case 11:
      case 12:
        day < 22 ? ((month -= 3), (day += 9)) : ((month -= 2), (day -= 21));
        break;
      default:
        break;
    }
  }

  var ye = new Date(date).toLocaleDateString("fa-IR").split("/")[0];
  if (format === null || format === undefined)
    return `${day} ${months[month - 1]} ${ye}`;
  if (format === "y/m/d") return `${year}/${month}/${day}`;
  if (format === "y") return `${ye}`;
  if (format === "d/m/y") return `${day}/${month}/${year}`;
  if (format === "M/dd/D") return `${week[d]} ${day} ${months[month - 1]}`; //چهارشنبه 12 مرداد
  if (format === "M/dd") return `${day} ${months[month - 1]}`; //3 شهريور
  if (format === "y/M/dd")
    return ` ${padTo2Digits(day)} / ${months[month - 1]} / ${ye}`; //04 / شهريور / ۱۴۰۱
};

export const GetTime = (date: Date): string => {
  var hours = date.getHours().toString();
  hours = ("0" + hours).slice(-2);
  var min = date.getMinutes().toString();
  min = ("0" + min).slice(-2);

  return `${hours}:${min}`;
};
export function MinutesToDuration(s: string) {
  var minutes = Number(s.split(":")[1].trim());
  var days = Math.floor(minutes / 1440);
  minutes = minutes - days * 1440;
  var hours = Math.floor(minutes / 60);
  minutes = minutes - hours * 60;
  var dur = "PT";
  if (days > 0) {
    dur += days + "D";
  }
  if (hours > 0) {
    dur += hours + "H";
  }
  dur += minutes + "M";

  return dur;
}
export const AddDays = (date: Date, days: number) => {
  var current = new Date(date);
  current.setDate(current.getDate() + days);
  return current;
};
