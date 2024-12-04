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
    .map((item) => item.split("") as Letter[]);

  const rowLength = input.length;
  const columnLength = input[0].length;

  // Part One
  let totalXmasPartOne = 0;
  for (let rowIdx = 0; rowIdx < rowLength; rowIdx++) {
    for (let colIdx = 0; colIdx < columnLength; colIdx++) {
      const letter = input[rowIdx][colIdx];
      if (letter !== "X") {
        continue;
      }
      for (let d = 0; d < directions.length; d++) {
        const dr = directions[d][0];
        const dc = directions[d][1];

        const maxRowIdx = rowIdx + dr * 3;
        const maxColIdx = colIdx + dc * 3;
        if (checkIfNotInBounds(maxRowIdx, maxColIdx, input)) {
          continue;
        }
        if (
          input[rowIdx + dr * 1][colIdx + dc * 1] === "M" &&
          input[rowIdx + dr * 2][colIdx + dc * 2] === "A" &&
          input[rowIdx + dr * 3][colIdx + dc * 3] === "S"
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
      const letter = input[rowIdx][colIdx];
      if (letter !== "A") {
        continue;
      }
      if (
        checkIfNotInBounds(
          rowIdx + upperLeft[0],
          colIdx + upperLeft[1],
          input
        ) ||
        checkIfNotInBounds(
          rowIdx + upperRight[0],
          colIdx + upperRight[1],
          input
        ) ||
        checkIfNotInBounds(
          rowIdx + lowerLeft[0],
          colIdx + lowerLeft[1],
          input
        ) ||
        checkIfNotInBounds(
          rowIdx + lowerRight[0],
          colIdx + lowerRight[1],
          input
        )
      ) {
        continue;
      }

      const upperLeftLetter =
        input[rowIdx + upperLeft[0]][colIdx + upperLeft[1]];
      const lowerRightLetter =
        input[rowIdx + lowerRight[0]][colIdx + lowerRight[1]];

      const upperRightLetter =
        input[rowIdx + upperRight[0]][colIdx + upperRight[1]];
      const lowerLeftLetter =
        input[rowIdx + lowerLeft[0]][colIdx + lowerLeft[1]];

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
