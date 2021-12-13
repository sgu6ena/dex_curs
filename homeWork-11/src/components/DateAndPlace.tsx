const DateAndPlace = ({ date, place }: { date: number; place: string }) => {
  const d = new Date(date * 1000);
  const month = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря"
  ];
  return (
    <div className={"date-and-place"}>
      <div className={"date"}>
        {d.getDate()} {month[d.getMonth()].toUpperCase()}, {d.getHours()}:
        {d.getMinutes() < 10 ? "0" : ""}
        {d.getMinutes()}
      </div>
      <div className={"place"}>{place}</div>
    </div>
  );
};

export default DateAndPlace;
