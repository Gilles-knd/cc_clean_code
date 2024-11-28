const dice = [1, 1, 1, 1, 1];
const dice2 = [1, 1, 1, 2, 3];
const rolls = [dice, dice2];
const evaluateYams = require(".");

describe("Yams game", () => {
  it.each([
    { input: dice, output: 50 },
    { input: dice2, output: 28 },
  ])("should return $output when given $input", ({ input, output }) => {
    expect(evaluateYams(input)).toBe(output);
  });
});
