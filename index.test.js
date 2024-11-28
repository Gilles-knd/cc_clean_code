const dice = [1, 1, 1, 1, 1];
const rolls = [dice, dice];
const evaluateYams = require(".");

describe("Yams game", () => {
  it.each([{ input: dice, output: 50 }])(
    "should return $output when given $input",
    ({ input, output }) => {
      expect(evaluateYams(input)).toBe(output);
    }
  );
});
