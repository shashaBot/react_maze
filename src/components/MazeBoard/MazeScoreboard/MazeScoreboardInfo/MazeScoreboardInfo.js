import React from "react";

import { ReactComponent as StepsIcon } from "../../../../assets/images/steps.svg";
import { ReactComponent as CatchedIcon } from "../../../../assets/images/catched.svg";
import { ReactComponent as RemainingIcon } from "../../../../assets/images/hands.svg";
import { ReactComponent as ScoreIcon } from "../../../../assets/images/scoreboard.svg";
import "./MazeScoreboardInfo.css";

function decideIcon(iconName) {
  switch (iconName) {
    case "Steps":
      return StepsIcon;
    case "Catched":
      return CatchedIcon;
    case "Remaining":
      return RemainingIcon;
    case "Score":
      return ScoreIcon;
    default:
  }
}

export default props => {
  const { title, text } = props;

  const Icon = decideIcon(title);

  return (
    <div className="MazeScoreboardInfo">
      <div className="MazeScoreboardInfo__titleWrapper">
        <div className="MazeScoreboardInfo__icon">
          <Icon />
        </div>
        <div className="MazeScoreboardInfo__title">{title}</div>
      </div>
      <div className={`MazeScoreboardInfo__text animation--slide`}>{text}</div>
    </div>
  );
};