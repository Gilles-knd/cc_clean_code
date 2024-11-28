//Commence par la fonction evaluate puis plays yams qui prend le tableau de list
function evaluateYams(dice) {
  let yamsresult = 0;
  let occurences = 0;

  for (let i = 1; i < dice.length; i++) {
    if (dice[i] === dice[i - 1]) {
      occurences += 1;
    }
  }

  //Grande suite
  if (occurences === 4) {
    yamsresult = 50;
  }

  return yamsresult;
}

module.exports = evaluateYams;
