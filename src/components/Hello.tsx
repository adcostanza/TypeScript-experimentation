import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }
export interface HelloState { loading: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, HelloState> {
  constructor(props: HelloProps) {
    super(props);
    this.state = {loading: "false"};
  }
    render() {
        return <div>
        <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
      <b>My state is {this.state.loading}</b>
      </div>;
    }
}
