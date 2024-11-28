function evaluatediceYams(dice) {
  const counts = {};

  for (const values of dice) {
    if (!counts[values]) {
      counts[values] = 0;
    }

    counts[values] += 1;
  }

  const occurences = Object.values(counts);

  //Yams
  if (occurences.includes(5)) {
    return 50;
  }
}

module.exports = evaluatediceYams;
