import React, { Component } from 'react';

export class EyesOnMe extends Component {
  handleFocus = () => {
    console.log("Good!");
  };

  handleBlur = () => {
    console.log("Hey! Eyes on me!");
  };

  render() {
    return (
      <div>
        <button onFocus={this.handleFocus} onBlur={this.handleBlur}>
          Eyes on me
        </button>
      </div>
    );
  }
}

export default EyesOnMe;
