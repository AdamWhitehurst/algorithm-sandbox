function longestCommonSubsequence(strOne, strTwo) {
  let memo = initMemo(strOne.length + 1, strTwo.length + 1);
  fillMemo(strOne.length - 1, strTwo.length - 1);
  return extractLCS(strOne.length, strTwo.length, "");

  function fillMemo(i, j) {
    if (i === strOne.length || j === strTwo.length) return 0;
    if (memo[i + 1][j + 1] !== -1) return memo[i + 1][j + 1];
    if (strOne[i] === strTwo[j]) {
      memo[i + 1][j + 1] = 1 + fillMemo(i - 1, j - 1);
      return memo[i + 1][j + 1];
    } else {
      memo[i + 1][j + 1] = Math.max(fillMemo(i - 1, j), fillMemo(i, j - 1));
      return memo[i + 1][j + 1];
    }
  }

  function extractLCS(row, col, seq) {
    while (col > 0) {
      while (memo[row][col - 1] === memo[row][col]) {
        col--;
      }
      seq = strTwo[col - 1] + seq;
      return extractLCS(row - 1, col - 1, seq);
    }
    return seq;
  }

  function initMemo(row, col) {
    let memo = new Array(row);
    memo[0] = new Array(col).fill(0);

    for (let i = 1; i < row; i++) {
      memo[i] = new Array(col).fill(-1);
      memo[i][0] = 0;
    }

    return memo;
  }
}

console.log(longestCommonSubsequence("abcdefghij", "cdgi"));
