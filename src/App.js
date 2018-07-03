import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      flag: false
    };
    this.handleFlag = this.handleFlag.bind(this);
  }

  handleFlag() {
    this.setState({
      flag: !this.state.flag
    });
  }

  render() {
    return (
      <div className="App">
        {!this.state.flag ? (
          <div>
            <p>Flag is True</p>
          </div>
        ) : (
          <div>
            <p>Flag is false</p>
          </div>
        )}
        <button onClick={this.handleFlag}>Change Flag</button>
      </div>
    );
  }
}

export default App;
