import { combineReducers, createStore } from "redux";
interface iDepartmens extends String {}
interface iEmploee {
  name: string;
  department: string;
}
// Определить тип для экшона
const initialDepartments = ["отдел 1", "отдел 2", "главный отдел"];

const initialEmloees = [
  {
    name: "Имя Фамилия",
    department: "отдел 1"
  },
  {
    name: "Имён  Фамилииевич",
    department: "отдел 2"
  }
];

const addDepartment = {
  type: "departments/add",
  payload: "новый отдел "
};
const addEmploees = {
  type: "emloees/add",
  payload: {
    name: "Имя",
    department: "Отдел"
  }
};

const deleteDepartment = {
  type: "departments/delete",
  payload: "новый отдел "
};

const deleteEmploees = {
  type: "emploees/delete",
  payload: {
    name: "Имя",
    department: "Отдел"
  }
};
// Создать редюсер с экшонами "departments/add" и "departments/delete"
// Создать редюсер с экшонами "emloees/add" и "emploees/delete"

function reduserDepartments(
  state = initialDepartments,
  action: typeof deleteDepartment | typeof addDepartment
) {
  switch (action.type) {
    case "departments/add":
      return [...state, action.payload];
    case "departments/delete":
      return state.filter((item) => item !== action.payload);
    default:
      return state;
  }
}
// Создать редюсер с экшонами "emloees/add" и "emploees/delete"
function reduserEmploees(
  state = initialEmloees,
  action: typeof addEmploees | typeof deleteEmploees
) {
  switch (action.type) {
    case "emloees/add":
      return [...state, action.payload];
    case "emploees/delete":
      return state.filter((item) => item.name !== action.payload.name);
    default:
      return state;
  }
}

const rootReducer = combineReducers({ reduserEmploees, reduserDepartments });

// создать стор
const store = createStore(rootReducer);
export default store;
// вызвать каждый экшон
const unsubscribe = store.subscribe(() =>
  console.log("Log: ", store.getState())
);
// законсолить изменения стейта
store.dispatch(addDepartment);
// console.log(store.getState());
store.dispatch(addEmploees);
// console.log(store.getState());
store.dispatch(deleteDepartment);
// console.log(store.getState());
store.dispatch(deleteEmploees);
// console.log(store.getState());
