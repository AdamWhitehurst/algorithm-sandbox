/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const sLength = s.length;
  if (sLength == 0) return "";
  if (sLength == 1) return s;

  let i = 0;
  let pStart = 0;
  let pLength = 1;

  while (pLength / 2 < sLength - i) {
    let j = i;
    let k = i;

    while (k < sLength - 1 && s[k] == s[k + 1]) k++;
    i = k + 1;

    while (j > 0 && k < sLength - 1 && s[j - 1] == s[k + 1]) {
      j--;
      k++;
    }

    let newLength = k - j + 1;
    if (newLength > pLength) {
      pLength = newLength;
      pStart = j;
    }
  }

  return s.substr(pStart, pLength);
};
