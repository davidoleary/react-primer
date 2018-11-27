import React, { Component } from "react";

class MyComponent extends Component {
  state = {
    name: 'intitial name',
  }

  onClick = () => {
    this.setState({ 
      name: 'dave' + new Date().toISOString()
    });
  };

  render() {
    return (
      <div onClick={this.onClick}>
       This is a class component
        Name (click me): {this.state.name}
      </div>
    );
  }
}

export default MyComponent;
