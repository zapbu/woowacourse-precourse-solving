const coins = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function problem5(money) {
  const res = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (let i = 0; i < coins.length; i++) {
    if (money === 0) break;

    const q = Math.floor(money / coins[i]);

    if (q === 0) {
      continue;
    }

    res[i] = q;
    money = money % coins[i];
  }
  return res;
}

module.exports = problem5;
