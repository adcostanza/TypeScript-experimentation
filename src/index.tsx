import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import { TodoList, TodoListProps } from "./components/TodoList";
import { TodoItemProps } from "./components/TodoItem";


const todos: TodoItemProps[] = [{
  description: "Clean the kitchen",
  expectedTime: "20 minutes"
},
{
  description: "Dishes",
  expectedTime: "5 minutes"
}];

const todoList: TodoListProps = {
  todos: todos
}
ReactDOM.render(
  <TodoList {...todoList} />,
  document.getElementById("app-root")
);
