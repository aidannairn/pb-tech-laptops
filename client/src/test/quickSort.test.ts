import { quickSort } from "./QuickSortFN";

describe("quicksort", () => {
  it("should sort an array of numbers", () => {
    const array: number[] = [5, 4, 1, 3, 2];
    const sorted: number[] = quickSort(array);
    expect(sorted).toEqual([1, 2, 3, 4, 5]);
  });
  it("should sort an array of strings", () => {
    const array: string[] = ["aidan", "nirmal", "adan"];
    const sorted: string[] = quickSort(array);
    expect(sorted).toEqual(["adan", "aidan", "nirmal"]);
  });
  it("should sort an array of strings using the alphabet", () => {
    const array: string[] = [
      "q",
      "a",
      "z",
      "s",
      "d",
      "g",
      "e",
      "t",
      "q",
      "p",
      "y",
      "g",
      "b",
    ];
    const sorted: string[] = quickSort(array);
    expect(sorted).toEqual([
      "a",
      "b",
      "d",
      "e",
      "g",
      "g",
      "p",
      "q",
      "q",
      "s",
      "t",
      "y",
      "z",
    ]);
  });
  it("should sort an array of strings using strings and numbers", () => {
    const array: any[] = [
      1,
      23,
      3,
      5,
      8768,
      546,
      "a",
      "q",
      "a",
      "z",
      "s",
      "d",
      "g",
      "e",
      "t",
      "q",
      "p",
      "y",
      "g",
      "b",
    ];
    const sorted: any[] = quickSort(array);
    expect(sorted).toEqual([
      "a",
      "a",
      "b",
      "d",
      "e",
      "g",
      "g",
      "p",
      "q",
      "q",
      "s",
      "t",
      "y",
      "z",
      1,
      3,
      5,
      23,
      546,
      8768,
    ]);
  });
});
