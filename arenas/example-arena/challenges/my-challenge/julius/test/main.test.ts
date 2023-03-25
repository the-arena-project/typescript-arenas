import { myChallenge } from "../index";

describe("My Challenge", () => {
  it("should return 42", () => {
    expect(myChallenge()).toBe(42);
  });

  it("should not return 21", () => {
    expect(myChallenge()).not.toBe(21);
  });
});
