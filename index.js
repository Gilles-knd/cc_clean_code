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

  //Full: 3 dés identiques et 2 dés identiques
  if (occurences.includes(3) && occurences.includes(2)) {
    return 25;
  }
}

module.exports = evaluatediceYams;
