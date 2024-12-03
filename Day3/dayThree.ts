import { readInput } from "..";

const mulsRegexPattern = /mul\(\d{1,3},\d{1,3}\)/g;

const numRegex = /\d{1,3}/g;

export const dayThree = async () => {
  const input = (await readInput("Day3/input.txt")).trim();

  // Part One
  const muls = [...input.matchAll(mulsRegexPattern)].map((item) => item[0]);
  let total = 0;
  muls.forEach((item) => {
    const nums = [...item.matchAll(numRegex)].map((item) => item[0]);

    total += Number(nums[0]) * Number(nums[1]);
  });

  // Part 2
  const dontDoRegex = /don't\(\)(.*?)do\(\)/g;

  const text = input.split("\n").join("").replaceAll(dontDoRegex, "");

  const muls2 = [...text.matchAll(mulsRegexPattern)].map((item) => item[0]);
  let total2 = 0;
  muls2.forEach((item) => {
    const nums = [...item.matchAll(numRegex)].map((item) => item[0]);

    total2 += Number(nums[0]) * Number(nums[1]);
  });

  return `Part One: ${total}\nPart Two: ${total2}`;
};
