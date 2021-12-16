import { createStore } from "redux";
// Определить тип для экшона
const initialState = {
  greetings: "Hello, World"
};
type iAction = {
  type: string;
};
// создать экшены FirstAction, SecondAction, AsyncAction
const FirstAction: iAction = {
  type: "FIRST_ACTION"
};
const SecondAction: iAction = {
  type: "SECOND_ACTION"
};
const AsyncAction: iAction = {
  type: "ASYNC_ACTION"
};
// создать редьюсер, который обрабатывает экшены: первый, второй, асинхронный
function appReducer(state = initialState, action: iAction) {
  switch (action.type) {
    case FirstAction.type:
      return { ...state, greetings: "Hello, FirstAction" };
    case SecondAction.type:
      return { ...state, greetings: "Hello, SecondAction" };
    case AsyncAction.type:
      return { ...state, greetings: "Hello, AsyncAction" };
    default:
      return state;
  }
}
// создать стор

const store = createStore(appReducer);

export default store;
// TODO подписаться на изменения сторы
const unsubscribe = store.subscribe(() =>
  console.log("State after dispatch: ", store.getState())
);
// Вызвать каждый экшон по одному разу
store.dispatch(FirstAction);
store.dispatch(SecondAction);
store.dispatch(AsyncAction);
// отписаться от изменений сторы
unsubscribe();
// Вызвать первый экшон ещё раз
store.dispatch(FirstAction);
// Вывести в консоль текущее состояние сторы
console.log(store.getState());
