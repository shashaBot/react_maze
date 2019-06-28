import React, { Component } from "react";

import MazeScoreboardInfo from "./MazeScoreboardInfo/MazeScoreboardInfo";

import "./MazeScoreboard.css";

export default class MazeScoreboard extends Component {
  render() {
    const {
      mazeSize,
      steps,
      score,
      catchedMushroomes,
      toggleBackgroundMusic,
      backgroundMusicStatus
    } = this.props;

    const musicIconStyle = backgroundMusicStatus
      ? "MazeScoreboard__musicButton--playing"
      : "MazeScoreboard__musicButton--stopped";

    return (
      <div className="MazeScoreboard">
        <MazeScoreboardInfo title="Steps" text={steps} />
        <MazeScoreboardInfo title="Catched" text={catchedMushroomes} />
        <MazeScoreboardInfo
          title="Remaining"
          text={mazeSize - catchedMushroomes}
        />
        <MazeScoreboardInfo title="Score" text={score} />

        <div
          className={`MazeScoreboard__musicButton ${musicIconStyle}`}
          onClick={toggleBackgroundMusic}
          title={backgroundMusicStatus ? "Stop Music" : "Play Music"}
        />
      </div>
    );
  }
}