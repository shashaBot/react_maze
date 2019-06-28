import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import GamePage from "../pages/GamePage/GamePage";
import Background from "../Background/Background";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__container">
          <Background>
            <Switch>
              <Route exact path="/game/:mazeSize" component={GamePage} />
              <Route exact path="/" component={HomePage} />
              <Redirect to="/" />
            </Switch>
          </Background>
        </div>
      </div>
    );
  }
}

export default App;