import React, { Component } from "react";
// import { Howl } from "howler";

import "./MazeCell.css";
import marioSVG from "../../../assets/images/mario.svg";
import mushroomSVG from "../../../assets/images/mushroom_green.png";

export default class MazeCell extends Component {
  handleScoringData() {
    const {
      cellId,
      mariosPosition,
      mushroomPositions,
      handleScoring
    } = this.props;

    // Handling when mushroom is colledcted.
    if (
      mariosPosition === cellId &&
      mushroomPositions.includes(mariosPosition)
    ) {
      // this.collectedSound.play();

      const updatedMushroomPositions = mushroomPositions.filter(position => {
        return position !== mariosPosition;
      });
      handleScoring(updatedMushroomPositions);
    }
  }

  decideCellImage() {
    const {
      cellId,
      mariosPosition,
      mushroomPositions,
      currentDirection
    } = this.props;
    let cellImage = {};

    // Deciding witch image to show.
    if (mariosPosition === cellId) {
      const mariosDirectionStyle =
        currentDirection === "left"
          ? "MazeCell__image--mario--leftSide"
          : "MazeCell__image--mario--rightSide";

      cellImage = {
        src: marioSVG,
        className: `MazeCell__image--mario ${mariosDirectionStyle}`
      };
    } else if (mushroomPositions.includes(cellId)) {
      cellImage = {
        src: mushroomSVG,
        className: "MazeCell__image--mushroom"
      };
    } else {
      cellImage = {
        src: "",
        className: ""
      };
    }

    return cellImage;
  }

  render() {
    const { cellId } = this.props;

    this.handleScoringData();
    const cellImageData = this.decideCellImage();

    return (
      <div className={`MazeCell MazeCell__${cellId}`}>
        <img
          className={`MazeCell__image ${cellImageData.className}`}
          src={cellImageData.src}
          alt=""
        />
      </div>
    );
  }
}