import { readInput } from "..";

export const dayOne = async () => {
  const input = (await readInput("DayOne/input.txt")).trim();

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

  let totalDistance = 0;

  for (let i = 0; i < pair1.length; i++) {
    const distance = Math.abs(pair1[i] - pair2[i]);

    totalDistance += distance;
  }

  return `Total Distance: ${totalDistance}`;
};
