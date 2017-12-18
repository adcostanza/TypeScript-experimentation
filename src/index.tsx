import * as React from "react";
import * as ReactDOM from "react-dom";

import { TodoList, TodoListProps } from "./components/Todo/TodoList";
import { TodoItemProps } from "./components/Todo/TodoItem";

import { Reddit } from './components/Reddit/Reddit';


const todos: TodoItemProps[] = [{
  description: "Clean the kitchen",
  expectedTime: "20 minutes"
},
{
  description: "Dishes",
  expectedTime: "5 minutes"
},
{
  description: "Eat a taco",
  expectedTime: "2 seconds"
}
];

const todoList: TodoListProps = {
  todos: todos
}
ReactDOM.render(
  // <TodoList {...todoList} />,
  <Reddit subreddit="news" />,
  document.getElementById("app-root")
);
