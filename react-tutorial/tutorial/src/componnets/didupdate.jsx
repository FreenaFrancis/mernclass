import React, { Component } from 'react';

class ExampleComponent extends Component {
  state = {
    count: 0
  };

  // This method will be invoked after each update (render) of the component
  componentDidUpdate(prevProps, prevState) {
    // Check if the count has changed
    if (this.state.count !== prevState.count) {
      console.log('Component updated! New count:', this.state.count);
    }
  }

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default ExampleComponent;
