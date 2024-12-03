import { report } from "process";
import { readInput } from "..";

type Comparator = "i" | "d";

const isIncreasingOrDecreasing = (
  a: number,
  b: number,
  comparator: "i" | "d"
) => {
  if (comparator === "i") {
    return a < b;
  } else {
    return a > b;
  }
};

const isValidLevel = (a: number, b: number, comparator: Comparator) => {
  const diff = Math.abs(a - b);
  const isOkayDiff = diff >= 1 && diff <= 3;

  return isOkayDiff && isIncreasingOrDecreasing(a, b, comparator);
};

export const dayTwo = async () => {
  const input = (await readInput("Day2/input.txt")).trim();

  const reports = input
    .split("\n")
    .map((item) => item.split(" ").map((n) => Number(n)));

  let totalValidReports = 0;

  /** Part One */
  for (let i = 0; i < reports.length; i++) {
    const report = reports[i];
    let comparator: Comparator = "i";
    if (report[0] < report[1]) {
      comparator = "i";
    } else {
      comparator = "d";
    }
    let isValidReport = true;

    for (let j = 0; j < report.length; j++) {
      if (typeof report[j + 1] === "undefined") {
        break;
      }
      const diff = Math.abs(report[j] - report[j + 1]);
      const isOkayDiff = diff >= 1 && diff <= 3;

      if (
        !isOkayDiff ||
        !isIncreasingOrDecreasing(report[j], report[j + 1], comparator)
      ) {
        isValidReport = false;
        break;
      }
    }
    if (isValidReport) {
      totalValidReports += 1;
    }
  }

  /** Part Two */
  let totalValidReportsPartTwo = 0;

  const newReports = [];

  for (let i = 0; i < reports.length; i++) {
    const report = reports[i];
    let comparator: Comparator = "i";
    if (report[0] < report[1]) {
      comparator = "i";
    } else {
      comparator = "d";
    }
    let isValidReport = true;

    let safeLevelRemoved = false;

    for (let j = 0; j < report.length; j++) {
      if (typeof report[j + 1] === "undefined") {
        break;
      }
      const diff = Math.abs(report[j] - report[j + 1]);
      const isOkayDiff = diff >= 1 && diff <= 3;

      if (
        !isOkayDiff ||
        !isIncreasingOrDecreasing(report[j], report[j + 1], comparator)
      ) {
        if (!safeLevelRemoved) {
          safeLevelRemoved = true;
          if (j === 0) {
            if (report[1] < report[2]) {
              comparator = "i";
            } else {
              comparator = "d";
            }
          } else {
            if (report[j + 1] < report[j + 2]) {
              comparator = "i";
            } else {
              comparator = "d";
            }
          }
        } else {
          isValidReport = false;
          break;
        }
      }
    }
    if (isValidReport) {
      newReports.push(report);
    }
  }

  for (let i = 0; i < newReports.length; i++) {
    const report = newReports[i];
    let comparator: Comparator = "i";
    if (report[0] < report[1]) {
      comparator = "i";
    } else {
      comparator = "d";
    }
    let isValidReport = true;

    for (let j = 0; j < report.length; j++) {
      if (typeof report[j + 1] === "undefined") {
        break;
      }
      const diff = Math.abs(report[j] - report[j + 1]);
      const isOkayDiff = diff >= 1 && diff <= 3;

      if (
        !isOkayDiff ||
        !isIncreasingOrDecreasing(report[j], report[j + 1], comparator)
      ) {
        isValidReport = false;
        break;
      }
    }
    if (isValidReport) {
      totalValidReportsPartTwo += 1;
    }
  }
};
