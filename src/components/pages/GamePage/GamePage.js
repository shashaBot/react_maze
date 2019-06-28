import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import MazeBoard from "../../MazeBoard/MazeBoard";
import "./GamePage.css";

export default class GamePage extends Component {
  render() {
    // Getting mazeSize pass to path. (ex: /game/10 => 10)
    //  Recived as string.
    const { mazeSize } = this.props.match.params;

    //  Trying to convert mazeSize into Number.
    const mazeSizeAsNumber = parseInt(mazeSize);

    // If path not recived valid number get redircted to root.
    if (Number.isNaN(mazeSizeAsNumber)) {
      return <Redirect to="/" />;
    }

    return (
      <div className="GamePage">
        <MazeBoard mazeSize={mazeSizeAsNumber} />
      </div>
    );
  }
}