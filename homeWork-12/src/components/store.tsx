import { createStore } from "redux";

type iCommands = string;
type iResults = string;
type iPath = string;
//список команд в памяти
const initialCommands: iCommands[] = ["cd ..", "cd home", "print message"];
//список результатов для вывода на экран
const initialResults: iResults[] = [];
//текущая директория
const initialPath: iPath[] = ["C:", "home", "sgu6ena", "download"];

//переход на уровень ниже
const addDir = {
  type: "dir/add",
  payload: "cd home"
};
//переход на уровень выше
const removeDir = {
  type: "dir/remove",
  payload: "cd .."
};
//сообщение об ошибке
const errorMessage = {
  type: "error",
  payload: "какая-то неправильная команда"
};
//вывод сообщения
const printMessage = {
  type: "message/add",
  payload: "print какое-то сообщение"
};

//общий редьюсер, наверное надо было разбить на разные редьюсеры
//и потом их объединять
function reducerCommand(
  state = {
    commands: initialCommands,
    results: initialResults,
    path: initialPath
  },
  action: { type: string; payload: string }
) {
  switch (action.type) {
    //если доавить папку
    case "dir/add":
      return {
        //команду добавить в список команд
        commands: [...state.commands, action.payload],
        //добавить текущую строку в результаты вывода
        results: [
          ...state.results,
          state.path.join("/") + " ~ " + action.payload
        ],
        //обновить текущее расположение - добавить новую директорию в конец
        path: [...state.path, action.payload.slice(3)]
      };
    case "dir/remove":
      return {
        //команду добавить в список команд
        commands: [...state.commands, action.payload],
        //добавить текущую строку в результаты вывода
        results: [
          ...state.results,
          state.path.join("/") + " ~ " + action.payload
        ],
        //обновить текущее расположение  - удалить последнюю директорию
        path: [...state.path.slice(0, -1)]
      };
    case "error":
      return {
        //команду добавить в список команд
        commands: [...state.commands, action.payload],
        //добавить текущую строку в результаты вывода
        //+ сообщение об ошибке
        results: [
          ...state.results,
          state.path.join("/") + " ~ " + action.payload,
          "Error: неверная команда"
        ],
        //расположение не меняем
        path: [...state.path]
      };
    case "message/add":
      return {
        //команду добавить в список команд
        commands: [...state.commands, action.payload],
        //добавить текущую строку в результаты вывода
        //+ сообщение
        results: [
          ...state.results,
          state.path.join("/") + " ~ " + action.payload,
          action.payload.split(" ").slice(1).join(" ")
        ],
        //расположение не меняем
        path: [...state.path]
      };
    default:
      return state;
  }
}

const store = createStore(reducerCommand);
export default store;

store.dispatch(removeDir);
store.dispatch(addDir);
store.dispatch(addDir);
store.dispatch(errorMessage);
store.dispatch(printMessage);
store.dispatch(printMessage);
