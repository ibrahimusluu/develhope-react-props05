import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
  static defaultProps = {
    // here defaultProps is a special keyword we must use.
    name: "stranger",
  };

  render() {
    return (
      <div>
        <p>Welcome, {this.props.name}!</p>
        <p>
          <Age age={this.props.age} />
        </p>
      </div>
    );
  }
}
