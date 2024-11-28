function evaluatediceYams(dice) {
  const counts = {};

  for (const values of dice) {
    if (!counts[values]) {
      counts[values] = 0;
    }

    counts[values] += 1;
  }

  const occurences = Object.values(counts);

  //Yams: 5 dés identiques
  if (occurences.includes(5)) {
    return 50;
  }

  //Carré: 4 dés identiques
  if (occurences.includes(4)) {
    return 35;
  }
}

module.exports = evaluatediceYams;
