function problem2(str) {
  let prev = "";
  while (1) {
    if (prev === str) {
      return str;
    }
    prev = str;
    str = str.replace(/(\w)\1/, "");
  }
}

module.exports = problem2;
