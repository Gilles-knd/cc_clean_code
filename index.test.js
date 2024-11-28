const dice = [1, 1, 1, 1, 1];
const dice2 = [1, 1, 1, 1, 2];
const evaluatediceYams = require(".");

describe("Yams game", () => {
  it.each([
    { input: dice, output: 50 },
    { input: dice2, output: 35 },
  ])("should return $output when given $input", ({ input, output }) => {
    expect(evaluatediceYams(input)).toBe(output);
  });
});
