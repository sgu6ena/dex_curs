import React from "react";
import { ITodo } from "../types";

interface TodoCardProps {
  todo: ITodo;
  deleteCallback: (id: number) => void;
  id: number;
}

//TODO: сделать компонент TodoCard

export class TodoCard extends React.Component<TodoCardProps> {
  constructor(props: TodoCardProps) {
    super(props);
    this.state = {
      done: props.todo.done
    };
    this.todoToggle = this.todoToggle.bind(this);
  }

  todoToggle() {
    this.setState((prevState) => {
      return {
        done: !prevState.done
      };
    });
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: this.state.done ? "lightgreen" : "lightyellow",
          textDecoration: this.state.done ? "line-through" : "none"
        }}
        className="todoCard"
        key={this.props.id}
        onClick={this.todoToggle}
      >
        {this.props.todo.text}
        <button
          className="delete_todo"
          onClick={this.props.deleteCallback.bind(this, this.props.id)}
        >
          ✖
        </button>
      </div>
    );
  }
}
