import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import MazeScoreboardInfo from ".././MazeScoreboard/MazeScoreboardInfo/MazeScoreboardInfo";

import congratzImage1 from "../../../assets/images/congratz.png";
import "./MazeWon.css";

class MazeWon extends Component {
  render() {
    const { steps, score, catchedMushroomes } = this.props;

    return (
      <div className="MazeWon">
        <div className="MazeWon__congratzImage">
          <img src={congratzImage1} alt="Won" />
        </div>
        <div className="MazeWon__details">
          <p>You Have Won With Following Statistics.</p>
        </div>
        <div className="MazeWon_statistics">
          <MazeScoreboardInfo title="Steps" text={steps} />
          <MazeScoreboardInfo title="Score" text={score} />
          <MazeScoreboardInfo title="Catched" text={catchedMushroomes} />
        </div>
        <div
          className="MazeWon_playAgainButton"
          onClick={() => this.props.history.push("/")}
        >
          PLAY AGAIN
        </div>
      </div>
    );
  }
}

export default withRouter(MazeWon);