[1, 2, 3].sort();

function problem1(pobi, crong) {
  const pobiNum = getBiggestNum(pobi);
  const crongNum = getBiggestNum(crong);

  if (isEdgeCase(pobi) || isEdgeCase(crong)) {
    return -1;
  }
  if (pobiNum > crongNum) {
    return 1;
  }
  if (pobiNum < crongNum) {
    return 2;
  }
  return 0;
}

function isEdgeCase(pageNums) {
  return pageNums[1] - pageNums[0] != 1;
}

function getBiggestNum(pageNums) {
  const res1 = getBiggestNumInPage(pageNums[0]);
  const res2 = getBiggestNumInPage(pageNums[1]);

  return res1 > res2 ? res1 : res2;
}

function getBiggestNumInPage(pageNum) {
  let biggest = 0;
  const nums = pageNum
    .toString()
    .split("")
    .map((v) => parseInt(v));

  for (const num of nums) {
    for (const num2 of nums) {
      if (num == num2) continue;
      const sum = num + num2;
      const mul = num * num2;
      if (sum > biggest) biggest = sum;
      if (mul > biggest) biggest = mul;
    }
  }
  return biggest;
}

module.exports = problem1;
