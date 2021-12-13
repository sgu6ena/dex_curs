import TurnerName from "./TurnerName";
import React from "react";
import Logo from "./Logo";
import Score from "./Score";
import DateAndPlace from "./DateAndPlace";

import Data from "../data";

const MiniBlock = (props: { id: number }) => {
  const data = Data.filter((item) => props.id === item.id)[0];
  const d = +new Date();

  return (
    <div className={"block miniblock"}>
      <TurnerName text={data.name} />
      <div className={"d-flex"}>
        <Logo name={data.commandFirst.name} path={data.commandFirst.logo} />
        <Score
          C1Score={data.commandFirst.score}
          C2Score={data.commandSecond.score}
        />
        <Logo name={data.commandSecond.name} path={data.commandSecond.logo} />
      </div>
      <div className={"d-flex"}>
        <DateAndPlace date={data.date} place={data.place} />
        {data.date * 1000 < d ? (
          <a
            href="#"
            className={"btn-light arrow"}
            title={"перейти к описанию матча"}
          />
        ) : (
          <button
            onClick={() =>
              alert("Билет забронирован. Перейдите в личный кабинет для оплаты")
            }
            className={"btn bilet"}
            title={"купить билет"}
            style={{ order: 5, padding: "8px " }}
          />
        )}
      </div>
    </div>
  );
};

export default MiniBlock;
