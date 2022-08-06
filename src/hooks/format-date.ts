const formatDate = (oldFormat: string) => {
  const daysOfWeek = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
  const months = [
    "янв",
    "фев",
    "мар",
    "апр",
    "май",
    "июн",
    "июл",
    "авг",
    "сен",
    "ноя",
    "дек",
  ];
  const [day, month, year] = oldFormat.split(".");
  const date = new Date(+year, +month - 1, +day);
  const dayOfWeek = daysOfWeek[date.getDay()];
  const localMonth = months[date.getMonth()];
  const localeStringFormat =
    day + " " + localMonth + " 20" + year + ", " + dayOfWeek;
  return localeStringFormat;
};
export default formatDate;
