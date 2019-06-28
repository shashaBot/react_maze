// Generate multiple random numbers to given critiria.
export function generateRandomNumbers(configs) {
  const { min = 0, max = 100, noOfRandomNum = 1, excludeList = [] } = configs;
  const randomNumberList = [];

  while (randomNumberList.length < noOfRandomNum) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    if (
      // Ignoring generated number if its already generated OR in excluded list.
      !randomNumberList.includes(randomNumber) &&
      !excludeList.includes(randomNumber)
    ) {
      randomNumberList.push(randomNumber);
    }
  }

  return randomNumberList;
}

// Generating mario's initial middle position according to mazeSize.
export function generateMariosPosition(mazeSize) {
  // Calulate initially how much further (starting from 0) mario should be positioned.

  const middle = Math.round(mazeSize / 2);
  return (middle - 1) * mazeSize + (middle - 1);
}
