function longestCommonSubsequence(strOne, strTwo) {
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
    } else {
      memo[i][j] = Math.max(fillMemo(i, j + 1), fillMemo(i + 1, j));
      return memo[i][j];
    }
  }

  function extractLCS(row, col, colMax, seq) {
    while (col < colMax) {
      while (memo[row][col + 1] === memo[row][col]) {
        col++;
      }
      seq += strTwo[col];
      return extractLCS(row + 1, col + 1, colMax, seq);
    }
    return seq;
  }

  function initMemo(row, col) {
    let memo = new Array(row);
    // memo[0] = new Array(col).fill(0);

    for (let i = 0; i < row; i++) {
      memo[i] = new Array(col).fill(-1);
      // memo[i][0] = 0;
    }

    return memo;
  }
}

console.log(longestCommonSubsequence("abcdefghij", "cdgi"));
