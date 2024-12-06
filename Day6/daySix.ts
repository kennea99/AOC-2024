import { readInput } from "..";

type Directions = "^" | ">" | "<" | "V";

const directionMap: Record<Directions, Directions> = {
  "^": ">",
  ">": "V",
  V: "<",
  "<": "^",
};

const directionMovingMap: Record<Directions, number[]> = {
  "^": [-1, 0],
  ">": [0, 1],
  V: [1, 0],
  "<": [0, -1],
};

const isOutOfBounds = (
  k: number,
  l: number,
  rowLength: number,
  columnLength: number
) => {
  return k < 0 || k > rowLength - 1 || l < 0 || l > columnLength - 1;
};

export const daySix = async () => {
  const input = (await readInput("Day6/input.txt"))
    .split("\n")
    .map((line) => line.split(""));

  const rowLength = input.length;
  const columnLength = input[0].length;

  let numberOfMoves = 0;

  // Part 1
  let total1 = 0;
  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < columnLength; j++) {
      if ((Object.values(directionMap) as string[]).includes(input[i][j])) {
        let [k, l] = [i, j];

        let currentDirection = input[i][j] as Directions;

        const visited = new Set<string>();
        while (!isOutOfBounds(k, l, rowLength, columnLength)) {
          const key = `${k},${l}`;
          visited.add(key);

          const nextK = k + directionMovingMap[currentDirection][0];
          const nextL = l + directionMovingMap[currentDirection][1];

          if (isOutOfBounds(nextK, nextL, rowLength, columnLength)) {
            break;
          }

          if (input[nextK][nextL] === "#") {
            currentDirection = directionMap[currentDirection];
          } else {
            k = nextK;
            l = nextL;
          }
        }
        total1 = visited.size;
        if (numberOfMoves > 0) break;
      }
      if (numberOfMoves > 0) break;
    }
  }

  let initialLocation: number[] = [];
  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < columnLength; j++) {
      if ((Object.values(directionMap) as string[]).includes(input[i][j])) {
        initialLocation = [i, j];
      }
    }
  }

  // Part 2
  let total2 = 0;
  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < columnLength; j++) {
      const extraObstacle = [i, j];

      let [k, l] = initialLocation;
      let currentDirection = input[initialLocation[0]][
        initialLocation[1]
      ] as Directions;

      const visited = new Set<string>();

      while (!isOutOfBounds(k, l, rowLength, columnLength)) {
        const key = `${k},${l},${currentDirection}`;
        if (visited.has(key)) {
          total2 += 1;
          break;
        }
        visited.add(key);

        const nextK = k + directionMovingMap[currentDirection][0];
        const nextL = l + directionMovingMap[currentDirection][1];

        if (isOutOfBounds(nextK, nextL, rowLength, columnLength)) {
          break;
        }

        if (
          input[nextK][nextL] === "#" ||
          (nextK === extraObstacle[0] && nextL === extraObstacle[1])
        ) {
          currentDirection = directionMap[currentDirection];
        } else {
          k = nextK;
          l = nextL;
        }
      }
    }
  }

  return `Part One: ${total1}\nPart 2: ${total2}`;
};
