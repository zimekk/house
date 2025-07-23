import { expect, test } from "vitest";
import { shift, middle, cross, flipy, meter } from "..";

test("shift", () => {
  expect(shift([1, 1], [1, -1])).toEqual([2, 0]);
});

test("middle", () => {
  expect(middle([1, 1], [3, -1])).toEqual([2, 0]);
});

test("cross", () => {
  expect(cross([0, 1], [3, -1])).toEqual([0, -1]);
});

test("flipy", () => {
  expect(flipy([1, 1])).toEqual([1, -1]);
});

test("meter", () => {
  expect(meter([0, 0], [4, 0], [2, 1])).toEqual([
    [0, 0],
    [0, 1],
    [4, 1],
    [4, 0],
    [2, 1],
    4,
    0,
  ]);
  expect(meter([0, 0], [0, 4], [1, 2])).toEqual([
    [0, 0],
    [1, 0],
    [1, 4],
    [0, 4],
    [1, 2],
    4,
    90,
  ]);
  // expect(meter([1, 1], [3,2], [2,3])).toEqual([[1,1], [1,1], [3,2], [3,2], [2,3], 0]);
});
