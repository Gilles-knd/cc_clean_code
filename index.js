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
    return 30;
  }

  //Brelan: 3 dés identiques
  if (occurences.includes(3)) {
    return 28;
  }

  //Grande suite: 5 dés se suivent
  const sortedDice = [...dice].sort((a, b) => a - b);
  let isSuite = true;

  for (let i = 0; i < sortedDice.length - 1; i++) {
    if (sortedDice[i] + 1 !== sortedDice[i + 1]) {
      isSuite = false;
    }
  }

  if (isSuite) {
    return 40;
  }
  //Chance: somme des dés
  return dice.reduce((acc, curr) => acc + curr, 0);
}

//Grosse fonction pour suite de lancers
function evaluateYams(rolls) {
  return rolls.reduce((acc, curr) => acc + evaluatediceYams(curr), 0);
}

module.exports = { evaluatediceYams, evaluateYams };
