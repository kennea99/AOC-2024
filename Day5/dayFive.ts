import { readInput } from "..";

const isGoodUpdate = (update: number[], rules: [number, number][]) => {
  const idxMap = new Map<number, number>();

  update.forEach((pageNum, i) => idxMap.set(pageNum, i));

  for (const [before, after] of rules) {
    if (idxMap.has(before) && idxMap.has(after)) {
      if (idxMap.get(before)! >= idxMap.get(after)!) {
        return false;
      }
    }
  }
  return true;
};

export const dayFive = async () => {
  const input = await readInput("Day5/input.txt");

  const [rulesPart, updatePart] = input.split("\n\n");

  const rules: [number, number][] = rulesPart
    .split("\n")
    .map((line) => line.split("|").map(Number) as [number, number]);

  const updates: number[][] = updatePart
    .split("\n")
    .map((line) => line.split(",").map(Number));

  let sum = 0;

  for (const update of updates) {
    if (isGoodUpdate(update, rules)) {
      sum += update[Math.floor(update.length / 2)];
    }
  }

  console.log(sum);
};
