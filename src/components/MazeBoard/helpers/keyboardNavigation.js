// import { walkSound } from "./musicHandler";

/*  Validating direction is possible or not through current row & column. 
     (For ex. when we are in the top row we should not be able to go further up.*/

function isValidKeyNavigation(direction, mariosCurrentPosition, mazeSize) {
  // "mazeSize" is equavelent to "No of cells per Row, Column" and "No of Rows, Columns per Grid".
  const currentRow =
    mariosCurrentPosition % mazeSize === 0
      ? Math.ceil(mariosCurrentPosition / mazeSize) + 1 // Since calculation start from 0.
      : Math.ceil(mariosCurrentPosition / mazeSize);
  const currentColumn =
    mazeSize - (Math.ceil(currentRow * mazeSize) - 1 - mariosCurrentPosition);

  switch (direction) {
    case "ArrowUp": {
      // False when we are in First Row.
      return currentRow > 1;
    }

    case "ArrowDown": {
      // False when we are in Last Row.
      return currentRow < mazeSize;
    }

    case "ArrowLeft": {
      // False when we are in First Column.
      return currentColumn > 1;
    }

    case "ArrowRight": {
      // False when we are in Last Column.
      return currentColumn < mazeSize;
    }
    default: {
      // For any other key direction is not possible.
      return false;
    }
  }
}

export function handleKeyboardNavigation(e) {
  // In here "this" is binded with "MazeBoard" component.
  const { mariosPosition: mariosCurrentPosition, mazeSize, steps } = this.state;
  const direction = e.key;

  if (!isValidKeyNavigation(direction, mariosCurrentPosition, mazeSize)) {
    // If not a valid navigation nothing happens.
    return;
  } else {
    // Playing walking sound when mario moves.
    // walkSound.play("walk");

    // Desiding which direction to go according to pressed key.
    // "mazeSize" is equavelent to "No of cells per Row, Column" and "No of Rows, Columns per Grid".

    switch (direction) {
      case "ArrowUp": {
        this.setState({
          mariosPosition: mariosCurrentPosition - mazeSize,
          steps: steps + 1
        });
        break;
      }

      case "ArrowDown": {
        this.setState({
          mariosPosition: mariosCurrentPosition + mazeSize,
          steps: steps + 1
        });
        break;
      }

      case "ArrowLeft": {
        this.setState({
          mariosPosition: mariosCurrentPosition - 1,
          steps: steps + 1,
          currentDirection: "left"
        });
        break;
      }

      case "ArrowRight": {
        this.setState({
          mariosPosition: mariosCurrentPosition + 1,
          steps: steps + 1,
          currentDirection: "right"
        });
        break;
      }
      default:
    }
  }
}
