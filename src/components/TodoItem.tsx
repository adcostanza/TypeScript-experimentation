import * as React from "react";
const styles =  require('./todo.css');

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
  activate(): void {
    this.setState((prevState, props) => {
      return { complete: !prevState.complete }
    });
    console.log(this.state);
  }
  render() {
    return <div className={this.state.complete ? styles.complete: null} onClick={this.activate.bind(this)}>
      {this.props.description} <i>{this.props.expectedTime}</i>
    </div>;
  }
}
