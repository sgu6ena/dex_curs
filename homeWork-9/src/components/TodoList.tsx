import React from "react";
import { ITodo } from "../types";
import { TodoCard } from "./TodoCard";

interface ITodoListProps {
  todos: ITodo[];
  deleteCallback: (id: number) => void;
}

//TODO: сделать TodoList компонент
export class TodoList extends React.Component<ITodoListProps> {
  render() {
    const todoCards = this.props.todos.map((todo: ITodo, index: number) => (
      <TodoCard
        key={todo.id}
        todo={todo}
        id={index}
        deleteCallback={this.props.deleteCallback}
      />
    ));

    return <div>Список:{todoCards}</div>;
  }
}
