const dice = [1, 1, 1, 1, 1];
const dice2 = [1, 1, 1, 1, 2];
const dice3 = [1, 1, 1, 2, 2];
const dice4 = [1, 3, 2, 2, 2];
const dice5 = [1, 2, 3, 4, 5];
const dice6 = [1, 2, 3, 4, 6];
const rolls = [dice, dice2];
const rolls2 = [dice, dice2, dice3, dice4, dice5, dice6];
const { evaluatediceYams, evaluateYams } = require(".");

describe("Yams game", () => {
  it.each([
    { input: dice, output: 50 },
    { input: dice2, output: 35 },
    { input: dice3, output: 30 },
    { input: dice4, output: 28 },
    { input: dice5, output: 40 },
    { input: dice6, output: 16 },
  ])("should return $output when given $input", ({ input, output }) => {
    expect(evaluatediceYams(input)).toBe(output);
  });

  it("should return the sum of all the rolls", () => {
    expect(evaluateYams(rolls)).toBe(85);
  });

  it("should return the sum of all the rolls", () => {
    expect(evaluateYams(rolls2)).toBe(199);
  });
});
