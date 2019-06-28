import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./HomePage.css";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mazeSizeInputValue: "",
      mazeSizeInputValueError: ""
    };
  }

  handleMazeSizeInput__onChange(e) {
    const inputValue = e.target.value;

    this.setState({
      mazeSizeInputValue: inputValue
    });
  }

  handleMazeSizeInput__onBlur(e) {
    const inputValue = e.target.value;

    if (inputValue >= 3 && inputValue <= 20) {
      this.setState({
        mazeSizeInputValue: inputValue,
        mazeSizeInputValueError: ""
      });
    } else {
      this.setState({
        mazeSizeInputValueError: "Maze Size Should Be Between 3-20"
      });
    }
  }

  handleGameStart() {
    const { mazeSizeInputValue } = this.state;

    if (mazeSizeInputValue >= 3 && mazeSizeInputValue <= 20) {
      this.props.history.push(`/game/${mazeSizeInputValue}`);
    } else {
      this.setState({
        mazeSizeInputValueError: "Maze Size Should Be Between 3-20"
      });
    }
  }

  render() {
    const { mazeSizeInputValue, mazeSizeInputValueError } = this.state;

    return (
      <div className="HomePage">
        <div>
          <div className="HomePage__image">
            <img src="https://raw.githubusercontent.com/LantareCode/box-of-code/master/CSS/SuperMario-Animation/images/mariowalking/walk2.gif" alt="" />
          </div>
          <div className="HomePage__heading">
            <h1>Mario Maze</h1>
            <p>Just pick up the mushrooms already!</p>
          </div>
          <div className="HomePage__gridSize">
            {mazeSizeInputValueError ? (
              <div className="HomePage__gridSize__inputError">
                {mazeSizeInputValueError}
              </div>
            ) : (
              ""
            )}
            <input
              className="HomePage__gridSize__input"
              type="number"
              min="3"
              max="20"
              placeholder="Enter Maze Size Here"
              value={mazeSizeInputValue}
              onChange={this.handleMazeSizeInput__onChange.bind(this)}
              onBlur={this.handleMazeSizeInput__onBlur.bind(this)}
              onKeyDown={e =>
                e.key === "Enter" ? this.handleGameStart(e) : ""
              }
            />
          </div>
          <div
            className="HomePage__startButton"
            onClick={this.handleGameStart.bind(this)}
          >
            <p>START</p>
          </div>
          <div className="HomePage__smallIntro">
            <p>Enter how much large maze you want (3-20) and Press Start</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(HomePage);
