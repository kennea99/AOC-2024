import { readInput } from "..";

export const dayOne = async () => {
  const input = (await readInput("Day1/input.txt")).trim();

  const pairs = input.split("\n");

  const pair1 = pairs
    .map((item) => {
      const nums = item.split("   ");
      return Number(nums[0]);
    })
    .sort((a, b) => a - b);
  const pair2 = pairs
    .map((item) => {
      const nums = item.split("   ");
      return Number(nums[1]);
    })
    .sort((a, b) => a - b);

  /** Part 1 */
  let totalDistance = 0;

  for (let i = 0; i < pair1.length; i++) {
    const distance = Math.abs(pair1[i] - pair2[i]);

    totalDistance += distance;
  }

  /** Part 2 */
  let total = 0;

  for (let i = 0; i < pair1.length; i++) {
    let totalOccurrences = 0;
    for (let j = 0; j < pair2.length; j++) {
      if (pair1[i] === pair2[j]) {
        totalOccurrences += 1;
      }
    }
    total += pair1[i] * totalOccurrences;
  }

  return `Part One: ${totalDistance}\nPart Two: ${total}`;
};
