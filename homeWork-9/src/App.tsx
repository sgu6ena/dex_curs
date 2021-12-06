import React, { useState } from "react";
import "./App.css";
import { TodoList } from "./components/TodoList";
import { ProjectsList } from "./components/ProjectsList";
import { ITodo } from "./types";

const initialTodos = [
  { text: "Todo1", id: 0, done: false },
  { text: "Todo2", id: 1, done: false },
  { text: "Todo3", id: 2, done: false },
  { text: "Todo4", id: 3, done: true },
  { text: "Todo5", id: 4, done: false },
  { text: "Todo6", id: 5, done: true }
];
const initialTodoslight = [
  { text: "Todo 1 light", id: 0, done: false },
  { text: "Todo 2 light", id: 1, done: true },
  { text: "Todo 3 light", id: 2, done: false },
  { text: "Todo 4 light", id: 4, done: false }
];

export const App = () => {
  const [state, setState] = useState({
    selectedProjectId: 0,
    projects: [
      { important: true, text: "Важный проект", id: 0 },
      { important: false, text: "Легкий проект", id: 1 }
    ],
    todos: [initialTodos, initialTodoslight],
    todoLists: []
  });
  const selectProject = (id: number) => {
    setState((state) => ({
      ...state,
      selectedProjectId: id
    }));
  };
  const deleteTodo = (id: number) => {
    setState((state) => ({
      ...state,
      todos: {
        ...state.todos,
        [state.selectedProjectId]: state.todos[state.selectedProjectId].filter(
          (todo: ITodo, index: number) => index !== id
        )
      }
    }));
  };

  return (
    <section className={"layout"}>
      <header className={"header"}>My TODO app</header>
      <aside className={"aside"}>
        {ProjectsList ? (
          <>
            Проекты
            <ProjectsList onClick={selectProject} projects={state.projects} />
          </>
        ) : (
          "Нету проектов"
        )}
      </aside>
      <main className={"main"}>
        {TodoList ? (
          <TodoList
            deleteCallback={deleteTodo}
            todos={state.todos[state.selectedProjectId]}
          />
        ) : (
          "Нету тудулиста"
        )}
      </main>
      <footer className={"footer"}>
        Эту страницу можно копировать, ваще спокойно, и публиковать где угодно.
        Да кто вообще читает что там в футере написано?
      </footer>
    </section>
  );
};
