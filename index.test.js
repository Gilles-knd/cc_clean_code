const dice = [1, 1, 1, 1, 1];
const dice2 = [1, 1, 1, 1, 2];
const dice3 = [1, 1, 1, 2, 2];
const dice4 = [1, 3, 2, 2, 2];
const evaluatediceYams = require(".");

describe("Yams game", () => {
  it.each([
    { input: dice, output: 50 },
    { input: dice2, output: 35 },
    { input: dice3, output: 30 },
    { input: dice4, output: 28 },
  ])("should return $output when given $input", ({ input, output }) => {
    expect(evaluatediceYams(input)).toBe(output);
  });
});
