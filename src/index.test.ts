import { it, expect } from "vitest";
import { returnsOne } from "./index";

it("returns a 1", () => {
  expect(returnsOne()).toEqual(1);
});
