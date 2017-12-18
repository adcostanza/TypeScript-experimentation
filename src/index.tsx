import * as React from "react";
import * as ReactDOM from "react-dom";

// import { TodoList, TodoListProps } from "./components/Todo/TodoList";
// import { TodoItemProps } from "./components/Todo/TodoItem";

import { ManyReddit } from './components/Reddit/ManyReddit';


// const todos: TodoItemProps[] = [{
//   description: "Clean the kitchen",
//   expectedTime: "20 minutes"
// },
// {
//   description: "Dishes",
//   expectedTime: "5 minutes"
// },
// {
//   description: "Eat a taco",
//   expectedTime: "2 seconds"
// }
// ];
//
// const todoList: TodoListProps = {
//   todos: todos
// }
ReactDOM.render(
  // <TodoList {...todoList} />,
  <ManyReddit />,
  document.getElementById("app-root")
);
