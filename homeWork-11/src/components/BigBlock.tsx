import TurnerName from "./TurnerName";
import React from "react";
import Logo from "./Logo";
import Timer from "./Timer";
import DateAndPlace from "./DateAndPlace";
import Rates from "./Rates";

import Data from "../data";

const BigBlock = ({ id }: { id: number }) => {
  const data = Data.filter((item) => id === item.id)[0];

  return (
    <div className={"block bigblock"}>
      <TurnerName text={data.name} />
      <div className={"d-flex"}>
        <Logo name={data.commandFirst.name} path={data.commandFirst.logo} />
        <Timer date={data.date} />
        <Logo name={data.commandSecond.name} path={data.commandSecond.logo} />
      </div>
      <div className={"d-flex flex-wrap"}>
        <DateAndPlace date={data.date} place={data.place} />
        <Rates coefficients={data.coefficients} />
        <div className={"btn-wrapper"}>
          <button
            className={"btn bilet"}
            onClick={() => alert("А все уже все, а надо было раньше")}
          >
            Купить билет
          </button>
        </div>
      </div>
      <button
        className={"watch"}
        onClick={() => alert("Данная трансляция недоступна в вашем регионе")}
      >
        Смотреть трансляцию матча
      </button>
    </div>
  );
};

export default BigBlock;
