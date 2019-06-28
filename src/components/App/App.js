import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import GamePage from "../pages/GamePage/GamePage";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__container">
          <Switch>
            <Route exact path="/game/:mazeSize" component={GamePage} />
            <Route exact path="/" component={HomePage} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;