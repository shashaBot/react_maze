import React, { Component } from "react";

import MazeCell from "./MazeCell/MazeCell";
import MazeScoreboard from "./MazeScoreboard/MazeScoreboard";
import MazeWon from "./MazeWon/MazeWon";

import {
  generateRandomNumbers,
  generateMariosPosition
} from "./helpers/positionGenerators";
import { handleKeyboardNavigation } from "./helpers/keyboardNavigation";
// import {
//   mushroomCollectedSound,
//   backgroundMusicPlayer
// } from "./helpers/musicHandler";

import "./MazeBoard.css";

export default class MazeBoard extends Component {
  constructor(props) {
    super(props);

    const { mazeSize = 10 } = this.props; // Size of maze like 10 X 10
    const noOfMazeCell = mazeSize ** 2; // No of cells in grid (Ex. 10*10 == 100)

    // Generating mario's initial middle position according to mazeSize.
    const mariosPosition = generateMariosPosition(mazeSize);

    // Generating random "mushroom positions" that equavalent to "mazeSize". (Ex: 10x10 grid have 10 mushrooms); Excluding initial mariosPostion.
    const mushroomPositions = generateRandomNumbers({
      min: 0,
      max: noOfMazeCell - 1, // Substracting "1" due to couting start at 0.
      noOfRandomNum: mazeSize,
      excludeList: [mariosPosition]
    });

    this.state = {
      mazeSize: mazeSize,
      mariosPosition: mariosPosition,
      currentDirection: "right", // Which side mario should be facing.
      mushroomPositions: mushroomPositions,
      steps: 0,
      score: 0,
      catchedMushroomes: 0,
      backgroundMusic: true
    };
  }

  toggleBackgroundMusic() {
    const { backgroundMusic } = this.state;

    if (backgroundMusic) {
    //   backgroundMusicPlayer.stop();
      this.setState({
        backgroundMusic: false
      });
    } else {
    //   backgroundMusicPlayer.play();
      this.setState({
        backgroundMusic: true
      });
    }
  }

  handleScoring(updatedMushroomPositions) {
    const { mazeSize, steps } = this.state;

    // Playing collected like sound when mario collect a mushroom.
    // mushroomCollectedSound.play();

    const catchedMushroomes = mazeSize - updatedMushroomPositions.length; // mazeSize is equvalent to total mushrooms.
    const newScore = catchedMushroomes * 100 - steps;

    this.setState({
      mushroomPositions: updatedMushroomPositions,
      catchedMushroomes,
      score: newScore
    });
  }

  // Heart of this component. Generate individual cell in grid accordingly.
  generateMazeCells() {
    const {
      mazeSize,
      mariosPosition,
      mushroomPositions,
      currentDirection
    } = this.state;

    const mazeCellList = [];

    // "mazeSize" determine how many cells will be thare. (Ex: When "mazeSize" is 10, we will get "10x10 Grid".);
    const noOfMazeCell = mazeSize ** 2;

    for (let i = 0; i < noOfMazeCell; i++) {
      mazeCellList.push(
        <MazeCell
          cellId={i}
          key={i}
          mariosPosition={mariosPosition}
          mushroomPositions={mushroomPositions}
          handleScoring={this.handleScoring.bind(this)}
          currentDirection={currentDirection}
        />
      );
    }

    return mazeCellList;
  }

  componentWillMount() {
    // Keyboard Navigation Binding.
    document.addEventListener("keydown", handleKeyboardNavigation.bind(this));

    // Starting background music.
    // backgroundMusicPlayer.play();
  }

  componentWillUnmount() {
    document.removeEventListener(
      "keydown",
      handleKeyboardNavigation.bind(this)
    );

    // backgroundMusicPlayer.stop();
  }

  render() {
    const {
      mazeSize,
      mushroomPositions,
      steps,
      score,
      catchedMushroomes,
      backgroundMusic
    } = this.state;

    // Check if user is Won. (When all mushrooms collected)
    if (mushroomPositions.length === 0) {
      return (
        <MazeWon
          mazeSize={mazeSize}
          steps={steps}
          score={score}
          catchedMushroomes={catchedMushroomes}
          toggleBackgroundMusic={this.toggleBackgroundMusic.bind(this)}
          backgroundMusicStatus={backgroundMusic}
          hide={[""]}
        />
      );
    }

    // Styles for making dynamic GRID.
    const mazeSizeAsStyleProperty = `repeat(${mazeSize}, 1fr)`;
    const mazeBoardGridStyle = {
      gridTemplateColumns: mazeSizeAsStyleProperty,
      gridTemplateRows: mazeSizeAsStyleProperty
    };

    const generatedMazeCells = this.generateMazeCells();

    return (
      <div className="MazeBoard">
        <div>
          <MazeScoreboard
            mazeSize={mazeSize}
            steps={steps}
            score={score}
            catchedMushroomes={catchedMushroomes}
            toggleBackgroundMusic={this.toggleBackgroundMusic.bind(this)}
            backgroundMusicStatus={backgroundMusic}
          />
          <div className="MazeBoard__gridContainer">
            <div className="MazeBoard__grid" style={mazeBoardGridStyle}>
              {generatedMazeCells}
            </div>
          </div>
        </div>
      </div>
    );
  }
}