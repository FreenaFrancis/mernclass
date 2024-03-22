import React, { Component } from 'react';

class ProfileComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'John Doe',
      age: 30,
      email: 'john.doe@example.com'
    };
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    });
  };

  changeName = () => {
    this.setState({
      name: 'Jane Smith'  // Change the name to 'Jane Smith'
    });
  };

  render() {
    return (
      <div> 
        <h1>Profile Information</h1>
        <label>
          Name:
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </label>
        <button onClick={this.changeName}>Change Name</button>
        <p>Age: {this.state.age}</p>
        <p>Email: {this.state.email}</p>
      </div>
    );
  }
}

export default ProfileComponent;
