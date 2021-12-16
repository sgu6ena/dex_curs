import { useRef } from "react";
import store from "./store";
import { useSelector } from "react-redux";

const Input = () => {
  //счетчик для перемещений по командам
  let count: number = 0;
  const inputRef = useRef();
  //обновление пути
  const Path = (): string => {
    const value = useSelector((state) => state.path);
    return value.join("/") + " ~ ";
  };
  //обновление команд
  const Сommands = (): string => {
    const value = useSelector((state) => state.commands);
    return value;
  };
  let commands = Сommands();
  //обработка новой команды на энтер
  const newCommand = (command: string) => {
    //разбиваем команду на составляющие
    const parseCommand = command.trim().split(" ");
    //проверяем первый элемент - саму команду
    switch (parseCommand[0]) {
      //если change directory - проверяем аргументы
      case "cd":
        // если .. -  на уровень выше
        if (parseCommand[1] === "..") {
          // проверка на верхний уровень
          store.getState().path.length > 1
            ? store.dispatch({ type: "dir/remove", payload: command })
            : store.dispatch({ type: "error", payload: command });
        } else {
          store.dispatch({ type: "dir/add", payload: command });
        }
        break;
      //если печать - то выводим сообщение
      case "print":
        store.dispatch({ type: "message/add", payload: command });
        break;
      //в любых других случаях ошибка
      default:
        store.dispatch({ type: "error", payload: command });
    }
  };
  //слушатель нажатий кнопок
  const handleKeyPress = (event: EventListener) => {
    switch (event.key) {
      case "Enter":
        //если энтер - отправляем команду  на парсинг
        newCommand(inputRef.current.value);
        //обнуляем счетчик перебора команд
        count = 0;
        // очищаем инпут
        inputRef.current.value = "";
        break;
      //если стрелка вверх - то команды листаются в начало
      case "ArrowUp":
        if (count < commands.length) {
          inputRef.current.value = commands[commands.length - ++count];
        }
        break;
      // если стрелка вниз - то команды листаются в конец
      case "ArrowDown":
        if (count > 0) {
          inputRef.current.value = commands[commands.length - --count];
        }
    }
  };

  return (
    <div>
      <span>
        <Path />
      </span>
      <input
        ref={inputRef}
        type="text"
        className={"input"}
        autoFocus
        onKeyDown={handleKeyPress}
      />
    </div>
  );
};
export default Input;
