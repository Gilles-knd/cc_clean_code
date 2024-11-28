const dice = [1, 1, 1, 1, 1];
const evaluatediceYams = require(".");

describe("Yams game", () => {
  it.each([{ input: dice, output: 50 }])(
    "should return $output when given $input",
    ({ input, output }) => {
      expect(evaluatediceYams(input)).toBe(output);
    }
  );
});
