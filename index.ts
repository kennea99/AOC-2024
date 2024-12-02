import { dayOne } from "./DayOne/dayOne";

export const readInput = async (filename: string) => {
  try {
    const fileContent = Bun.file(filename);

    return await fileContent.text();
  } catch (e) {
    console.log(e);
    return "";
  }
};

/**
 * Day One: https://adventofcode.com/2024/day/1
 */
const answer = await dayOne();
console.log(answer);
/**
 *
 */
