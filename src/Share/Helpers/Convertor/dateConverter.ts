import Moment from "jalali-moment";

type IFormat =
  | "YYYY/MM/DD"
  | "HH:mm:ss"
  | "HH:mm"
  | "DD"
  | "D"
  | "MM"
  | "YYYY"
  | "YYYY/MM/DD - HH:mm"
  | "UTC";
type ISpecialFormat = "YEAR MONTH_NAME DAY" | "YEAR MONTH_NAME";
type ILocale = "Fa" | "En";


const DateConverter = {
  getTimeWithCustomFormat(
    date: string | Moment.Moment = "",
    formant: IFormat = "YYYY/MM/DD",
    locale: ILocale = "Fa",
  ): string {
    if (date === null) {
      return "";
    }
    const fullFormat = {
      Fa: {
        "YYYY/MM/DD": "jYYYY/jMM/jDD",
        "HH:mm:ss": "HH:mm:ss",
        "YYYY/MM/DD - HH:mm": "HH:mm - jYYYY/MM/DD",
        "HH:mm": "HH:mm",
        DD: "jDD",
        D: "jD",
        YYYY: "jYYYY",
        MM: "jMM",
      },
      En: {
        "YYYY/MM/DD": "YYYY/MM/DD",
        "YYYY/MM/DD - HH:mm": "YYYY/MM/DD - HH:mm",
        "HH:mm:ss": "HH:mm:ss",
        "HH:mm": "HH:mm",
        DD: "DD",
        D: "D",
        YYYY: "YYYY",
        MM: "MM",
      },
    };
    if (typeof date !== "string") {
      if (formant === "UTC") {
        return date.format();
      }
      return date.format(fullFormat[locale][formant]);
    }
    if (formant === "UTC") {
      return Moment(date).format();
    }
    return Moment(date).format(fullFormat[locale][formant]);
  },


  getSpecialTime(
    date: string | Moment.Moment = Moment(),
    formant: ISpecialFormat = "YEAR MONTH_NAME DAY",
    locale: ILocale = "Fa",
  ): string {
    if (formant === "YEAR MONTH_NAME DAY") {
      const year = this.getTimeWithCustomFormat(date, "YYYY", locale);
      const month = this.getMonthName(date, locale);
      const day = this.getTimeWithCustomFormat(date, "D", locale);
      return `${day} ${month} ${year}`;
    }
    if (formant === "YEAR MONTH_NAME") {
      const year = this.getTimeWithCustomFormat(date, "YYYY", locale);
      const month = this.getMonthName(date, locale);
      return `${month} ${year}`;
    }
    const year = this.getTimeWithCustomFormat(date, "YYYY", locale);
    const month = this.getMonthName(date, locale);
    const day = this.getTimeWithCustomFormat(date, "D", locale);
    const weekName = this.getWeekName(date);
    return `${weekName}  ${day}  ${month}  ${year}`;
  },


  getWeekName(date: string | Moment.Moment = ""): string {
    if (date === null) {
      return "";
    }
    if (typeof date !== "string") {
      // return translator.t(
      //   `Common:calendar.week.${date.locale("en").format("dddd")}`,
      // );
    }
    // return translator.t(
    //   `Common:calendar.week.${Moment(date).locale("en").format("dddd")}`,
    // );
    return "";
  },


  getMonthName(
    date: string | Moment.Moment = "",
    _locale: ILocale = "Fa",
  ): string {
    if (date === null) {
      return "";
    }
    // const fullFormat = {
    //   Fa: {
    //     MMMM: "jMMMM",
    //   },
    //   En: {
    //     MMMM: "MMMM",
    //   },
    // };
    if (typeof date !== "string") {
      // return translator.t(
      //   `Common:calendar.month.${date.format(fullFormat[locale].MMMM)}`,
      // );
    }
    // return translator.t(
    //   `Common:calendar.month.${Moment(date).format(fullFormat[locale].MMMM)}`,
    // );
    return "";
  },


  getDayInMonth(date: string | Moment.Moment, locale: ILocale = "Fa"): number {
    if (date === null) {
      return 0;
    }
    if (locale === "Fa") {
      if (typeof date !== "string") {
        return parseInt(date.endOf("jMonth").format("jDD"));
      }
      const calendarMonth: Moment.Moment = Moment(date);
      return parseInt(calendarMonth.endOf("jMonth").format("jDD"));
    }

    if (typeof date !== "string") {
      return parseInt(date.endOf("month").format("DD"));
    }
    const calendarMonth: Moment.Moment = Moment(date);
    return parseInt(calendarMonth.endOf("month").format("DD"));
  },


  isToday(date: string | Moment.Moment): boolean {
    if (!date) {
      return false;
    }
    if (typeof date === "string") {
      if (Moment().format("YYYY/MM/DD") === Moment(date).format("YYYY/MM/DD")) {
        return true;
      }
      return false;
    }
    if (Moment().format("YYYY/MM/DD") === date.format("YYYY/MM/DD")) {
      return true;
    }
    return false;
  },

  disableDateBeforeToday(DateDay: string): boolean {
    const dayDate = new Date(DateDay).getTime();
    const nowDate = new Date().getTime();
    return dayDate < nowDate;
  },
};

export default DateConverter;
