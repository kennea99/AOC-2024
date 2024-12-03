import { dayOne } from "./Day1/dayOne";
import { dayTwo } from "./Day2/dayTwo";
import { dayThree } from "./Day3/dayThree";

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
const answer1 = await dayOne();
console.log("Day One");
console.log(answer1);
console.log("----------------------------");
/**
 *
 */

/**
 * Day Two: https://adventofcode.com/2024/day/2
 */
const answer2 = await dayTwo();
console.log("Day Two");
console.log(answer2);
console.log("----------------------------");
/**
 *
 */

/**
 * Day Three: https://adventofcode.com/2024/day/3
 */
const answer3 = await dayThree();
console.log("Day Three");
console.log(answer3);
console.log("----------------------------");
