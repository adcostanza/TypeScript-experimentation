import * as React from "react";

export interface TodoItemProps {
  description: string;
  expectedTime: string;
}
export interface TodoItemState { complete: boolean; }

export class TodoItem extends React.Component<TodoItemProps, TodoItemState> {
  constructor(props: TodoItemProps) {
    super(props);
    this.state = { complete: false }
  }
  render() {
    return <div className="todoItem">{this.props.description} <i>{this.props.expectedTime}</i></div>;
      }
}
