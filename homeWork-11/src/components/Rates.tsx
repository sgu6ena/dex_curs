import {
  ReactElement,
  JSXElementConstructor,
  ReactNodeArray,
  ReactPortal
} from "react";

const Rates = (props: { coefficients: number[] }) => {
  const max = Math.max(...props.coefficients);
  const min = Math.min(...props.coefficients);
  const messages = ["ПОБЕДА ПЕРВОЙ КОМАНДЫ", "НИЧЬЯ", "ПОБЕДА ВТОРОЙ КОМАНДЫ"];
  const titles = ["П1", "Х", "П2"];

  return (
    <div className={"rates"}>
      {props.coefficients.map((item, index) => (
        <div>
          <button
            className={"rates-coef"}
            onClick={() =>
              alert(
                `Вы поставили 1 биткоин на ${messages[index]} с коэффициетом ${props.coefficients[index]}`
              )
            }
            title={messages[index]}
            style={
              item == min
                ? { background: "#27AF11" }
                : item == max
                ? { background: "#cc122d" }
                : {}
            }
          >
            {item}
          </button>
          {titles[index]}
        </div>
      ))}
    </div>
  );
};

export default Rates;
