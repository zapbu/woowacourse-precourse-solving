function isDuplicateName(n1, n2) {
  for (let i = 1; i < n1.length; i++) {
    const cc = n1[i - 1] + n1[i];
    if (n2.match(cc) !== null) {
      return true;
    }
  }
  return false;
}

function isDuplicate(n1, names) {
  for (let i = 0; i < names.length; i++) {
    const n2 = names[i];
    if (isDuplicateName(n1, n2)) {
      return true;
    }
  }
  return false;
}

function problem6(forms) {
  const r = [];
  const names = forms.map(([_, n]) => n);
  const emails = forms.map(([e, _]) => e);

  for (let i = 0; i < forms.length; i++) {
    const n = names[i];
    if (
      isDuplicate(
        n,
        names.filter((_, i2) => i !== i2)
      )
    ) {
      r.push(emails[i]);
    }
  }

  return r.sort();
}

module.exports = problem6;
