"use client";
import moment from "moment";
import React, { useEffect, useState } from "react";
moment.locale("id", {
  weekdaysMin: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
  weekdaysShort: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
  weekdays: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
  monthsShort: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ],
  months: [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ],
  calendar: {
    sameDay: "[Hari ini]",
    nextDay: "[Besok]",
    nextWeek: "dddd",
    lastDay: "[Kemarin]",
    lastWeek: "dddd",
    sameElse: "DD MMMM YYYY",
  },
  relativeTime: {
    future: "dalam %s",
    past: "%s yang lalu",
    s: "beberapa detik",
    ss: "%d detik",
    m: "semenit",
    mm: "%d menit",
    h: "sejam",
    hh: "%d jam",
    d: "sehari",
    dd: "%d hari",
    M: "sebulan",
    MM: "%d bulan",
    y: "setahun",
    yy: "%d tahun",
  },
});

type TypeFormat =
  | "time"
  | "dateTime"
  | "dateDay"
  | "date"
  | "dateTimeDay"
  | "day";

function Time({
  date,
  type,
  isRelative,
  isDaysShort,
  isMonthsShort,
  isYearsShort,
  customFormat,
  className,
}: {
  type?: TypeFormat;
  date?: string;
  isRelative?: boolean;
  isDaysShort?: boolean;
  isMonthsShort?: boolean;
  isYearsShort?: boolean;
  customFormat?: string;
  className?: string;
}) {
  const dateNow = new Date();

  const style = `${className} select-none` || `text-xl font-semibold text-slate-800 select-none`;
  const formatDays = isDaysShort ? "ddd" : "dddd";
  const formatMonths = isMonthsShort ? "MMM" : "MMMM";
  const formatYears = isYearsShort ? "YY" : "YYYY";

  const [currentTime, setCurrentTime] = useState(
    moment(dateNow).format("hh:mm")
  );
  const [currentDateTime, setCurrentDateTime] = useState(
    moment(dateNow).format(`DD ${formatMonths} ${formatYears}, hh:mm`)
  );
  const [currentDateTimeDay, setCurrentDateTimeDay] = useState(
    moment(dateNow).format(
      `${formatDays}, DD ${formatMonths} ${formatYears}, hh:mm`
    )
  );

  useEffect(() => {
    const time = moment(dateNow).format("hh:mm");
    const dateTime = moment(dateNow).format(
      `DD ${formatMonths} ${formatYears}, hh:mm`
    );
    const dateTimeDay = moment(dateNow).format(
      `${formatDays}, DD ${formatMonths} ${formatYears}, hh:mm`
    );
    const timer = setInterval(() => {
      setCurrentTime(time);
      setCurrentDateTime(dateTime);
      setCurrentDateTimeDay(dateTimeDay);
    }, 10000);
    return () => clearInterval(timer);
  }, [currentTime]);

  if (date && type === "date") {
    return (
      <h1 className={style}>
        {moment(date).format(`DD ${formatMonths} ${formatYears}`)}
      </h1>
    );
  }

  if (date && type === "dateTime") {
    return (
      <h1 className={style}>
        {moment(date).format(`DD ${formatMonths} ${formatYears}, hh:mm`)}
      </h1>
    );
  }

  if (date && type === "dateTimeDay") {
    return (
      <h1 className={style}>
        {moment(date).format(
          `${formatDays}, DD ${formatMonths} ${formatYears}, hh:mm`
        )}
      </h1>
    );
  }

  if (date && type === "dateDay") {
    return (
      <h1 className={style}>
        {moment(date).format(
          `${formatDays}, DD ${formatMonths} ${formatYears}`
        )}
      </h1>
    );
  }

  if (date && type === "day") {
    return <h1 className={style}>{moment(date).format(`${formatDays}`)}</h1>;
  }

  if (type === "time") {
    return <h1 className={style}>{currentTime}</h1>;
  }
  if (type === "dateTime") {
    return <h1 className={style}>{currentDateTime}</h1>;
  }
  if (type === "dateTimeDay") {
    return <h1 className={style}>{currentDateTimeDay}</h1>;
  }

  if (type === "day") {
    return <h1 className={style}>{moment(dateNow).format(`${formatDays}`)}</h1>;
  }

  if (type === "date") {
    return (
      <h1 className={style}>
        {moment(dateNow).format(`DD ${formatMonths} ${formatYears}`)}
      </h1>
    );
  }

  if (type === "dateDay") {
    return (
      <h1 className={style}>
        {moment(dateNow).format(
          `${formatDays}, DD ${formatMonths} ${formatYears}`
        )}
      </h1>
    );
  }

  if (customFormat) {
    return <h1 className={style}>{moment(dateNow).format(customFormat)}</h1>;
  }

  return (
    <h1 className={style}>
      {moment(dateNow).format(`DD ${formatMonths} YYYY`)}
    </h1>
  );
}

export default Time;
