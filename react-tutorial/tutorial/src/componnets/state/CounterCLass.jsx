import React, { Component } from 'react';

class CounterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    // Update the count state by incrementing by 1
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    // Update the count state by decrementing by 1
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default CounterComponent;
