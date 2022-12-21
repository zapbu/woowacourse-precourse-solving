function problem3(n) {
  let count = 0;
  for (let i = 3; i <= n; i++) {
    count += String(i)
      .replaceAll("3", "x")
      .replaceAll("6", "x")
      .replaceAll("9", "x")
      .replaceAll(/\d/g, "").length;
  }
  return count;
}

module.exports = problem3;
