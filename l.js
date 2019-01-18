function longestCommonSubsequence(strOne, strTwo) {
  if (strOne.length < 1 || strTwo.length < 1) return "";

  let memo = initMemo(strOne.length, strTwo.length);
  fillMemo(0, 0);
  console.log(memo);
  return extractLCS(0, 0, strTwo.length, "");

  function fillMemo(i, j) {
    if (i === strOne.length || j === strTwo.length) return 0;

    if (memo[i][j] !== -1) return memo[i][j];

    if (strOne[i] === strTwo[j]) {
      memo[i][j] = 1 + fillMemo(i + 1, j + 1);
      return memo[i][j];
    }
    memo[i][j] = Math.max(fillMemo(i + 1, j), fillMemo(i, j + 1));
    return memo[i][j];
  }

  function extractLCS(row, col, max, seq) {
    while (col < max) {
      if (memo[row][col] === memo[row][col+1]) col++;
      
    }
  }

  function initMemo(row, col) {
    let memo = [];
    for (let i = 0; i < row; i++) {
      memo.push(new Array(col).fill(-1));
    }
    return memo;
  }
}

console.log(longestCommonSubsequence("abc", "aaabbcc"));
