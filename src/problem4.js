function reverse(c) {
  if (c.match("[a-zA-Z]") === null) {
    return c;
  }
  if (c.match("[A-Z]") === null) {
    return String.fromCharCode(
      "a".charCodeAt() + "z".charCodeAt() - c.charCodeAt()
    );
  }
  return String.fromCharCode(
    "A".charCodeAt() + "Z".charCodeAt() - c.charCodeAt()
  );
}

function problem4(word) {
  return [...word].map((c) => reverse(c)).join("");
}

module.exports = problem4;
