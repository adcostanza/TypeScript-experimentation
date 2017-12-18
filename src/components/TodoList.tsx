import * as React from "react";
import {TodoItem, TodoItemProps} from "./TodoItem";

export interface TodoListProps {
  todos: TodoItemProps[];
}

export class TodoList extends React.Component<TodoListProps, {}> {
  render() {
    const TodoItems = this.props.todos.map((todo) => {
      return <TodoItem {...todo} />
    });
    return <div className="todoList">{TodoItems}</div>;
      }
}
