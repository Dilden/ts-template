import { it, expect } from "vitest";
import { tests } from "./index";

it("returns a 1", () => {
  expect(tests()).toEqual(1);
});
