import { readInput } from "..";

type Letter = "X" | "M" | "A" | "S";

const directions = [
  [0, 1],
  [1, 1],
  [1, 0],
  [1, -1],
  [0, -1],
  [-1, -1],
  [-1, 0],
  [-1, 1],
];

const checkIfNotInBounds = (row: number, col: number, input: Letter[][]) => {
  const rowLength = input.length;
  const colLength = input[0].length;

  return row < 0 || row > rowLength - 1 || col < 0 || col > colLength - 1;
};

const isValidDiagonal = (a: Letter, b: Letter) => {
  return (a === "M" && b === "S") || (a === "S" && b === "M");
};

export const dayFour = async () => {
  const input = (await readInput("Day4/input.txt"))
    .split("\n")
    .map((item) => item.split(""));

  const castedInput = input as Letter[][];

  const rowLength = castedInput.length;
  const columnLength = castedInput[0].length;

  // Part One
  let totalXmasPartOne = 0;
  for (let rowIdx = 0; rowIdx < rowLength; rowIdx++) {
    for (let colIdx = 0; colIdx < columnLength; colIdx++) {
      const letter = castedInput[rowIdx][colIdx];
      if (letter !== "X") {
        continue;
      }
      for (let d = 0; d < directions.length; d++) {
        const dr = directions[d][0];
        const dc = directions[d][1];
        if (
          rowIdx + dr * 3 > rowLength - 1 ||
          rowIdx + dr * 3 < 0 ||
          colIdx + dc * 3 > columnLength - 1 ||
          colIdx + dc * 3 < 0
        ) {
          continue;
        }
        if (
          castedInput[rowIdx + dr * 1][colIdx + dc * 1] === "M" &&
          castedInput[rowIdx + dr * 2][colIdx + dc * 2] === "A" &&
          castedInput[rowIdx + dr * 3][colIdx + dc * 3] === "S"
        ) {
          totalXmasPartOne += 1;
        }
      }
    }
  }

  //Part Two
  const upperLeft = [-1, -1];
  const upperRight = [-1, 1];
  const lowerLeft = [1, -1];
  const lowerRight = [1, 1];
  let totalXmasPartTwo = 0;
  for (let rowIdx = 0; rowIdx < rowLength; rowIdx++) {
    for (let colIdx = 0; colIdx < columnLength; colIdx++) {
      const letter = castedInput[rowIdx][colIdx];
      if (letter !== "A") {
        continue;
      }
      if (
        checkIfNotInBounds(
          rowIdx + upperLeft[0],
          colIdx + upperLeft[1],
          castedInput
        ) ||
        checkIfNotInBounds(
          rowIdx + upperRight[0],
          colIdx + upperRight[1],
          castedInput
        ) ||
        checkIfNotInBounds(
          rowIdx + lowerLeft[0],
          colIdx + lowerLeft[1],
          castedInput
        ) ||
        checkIfNotInBounds(
          rowIdx + lowerRight[0],
          colIdx + lowerRight[1],
          castedInput
        )
      ) {
        continue;
      }

      const upperLeftLetter =
        castedInput[rowIdx + upperLeft[0]][colIdx + upperLeft[1]];
      const lowerRightLetter =
        castedInput[rowIdx + lowerRight[0]][colIdx + lowerRight[1]];

      const upperRightLetter =
        castedInput[rowIdx + upperRight[0]][colIdx + upperRight[1]];
      const lowerLeftLetter =
        castedInput[rowIdx + lowerLeft[0]][colIdx + lowerLeft[1]];

      if (
        isValidDiagonal(upperLeftLetter, lowerRightLetter) &&
        isValidDiagonal(upperRightLetter, lowerLeftLetter)
      ) {
        totalXmasPartTwo += 1;
      }
    }
  }

  return `Part One: ${totalXmasPartOne}\nPart Two: ${totalXmasPartTwo}`;
};
