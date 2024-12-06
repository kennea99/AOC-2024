import { dayOne } from "./Day1/dayOne";
import { dayTwo } from "./Day2/dayTwo";
import { dayThree } from "./Day3/dayThree";
import { dayFour } from "./Day4/dayFour";
import { dayFive } from "./Day5/dayFive";
import { daySix } from "./Day6/daySix";

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
// const answer1 = await dayOne();
// console.log("Day One");
// console.log(answer1);
// console.log("----------------------------");
/**
 *
 */

/**
 * Day Two: https://adventofcode.com/2024/day/2
 */
// const answer2 = await dayTwo();
// console.log("Day Two");
// console.log(answer2);
// console.log("----------------------------");
/**
 *
 */

/**
 * Day Three: https://adventofcode.com/2024/day/3
 */
// const answer3 = await dayThree();
// console.log("Day Three");
// console.log(answer3);
// console.log("----------------------------");

/**
 * Day Four: https://adventofcode.com/2024/day/4
 */
// const answer4 = await dayFour();
// console.log("Day Four");
// console.log(answer4);
// console.log("----------------------------");

/**
 * Day Five: https://adventofcode.com/2024/day/5
 */
// const answer5 = await dayFive();
// console.log("Day Five");
// console.log(answer5);
// console.log("----------------------------");

/**
 * Day Six: https://adventofcode.com/2024/day/6
 */
const answer6 = await daySix();
console.log("Day Six");
console.log(answer6);
console.log("----------------------------");
