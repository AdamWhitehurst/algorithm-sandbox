/**
 * Recursively computes the number of possible opening hands given a bag that
 * contains the amounts of each possible letter to pull. An opening hand
 * consists of a maximum of 7 letters.
 *
 * @param {number[]} bag - Represents a bag holding the amounts of each
 * letter contained within the bag. Example:
 * bag = [ 12, 10, 5, ...] = [ 12 A's, 10 B's, 5 C's, ...]
 * The bag can contain any amount of each letter and is not constrained to
 * English characters.
 *
 * @param {number} li - The index of the current letter we are considering.
 * @param {number} lc - The count of letters already pulled from the current
 *                      letter index
 * @param {number} hs - The size of the current hand
 * @param {string} s - String representation of the current hand
 */

function scrabbleHandCombos(bag, li = 0, lc = 0, hs = 0, s = "") {
  if (hs === 7) {
    console.log(s);
    return 1;
  }

  let count = 0;

  for (let i = li; i < bag.length; i++) {
    lc++;
    if (lc <= bag[i]) {
      count += scrabbleHandCombos(
        bag,
        i,
        lc,
        hs + 1,
        s + String.fromCharCode(65 + i)
      );
    }
    lc = 0;
  }

  return count;
}

console.log("Total opening hands: " + scrabbleHandCombos([3, 4, 4]));
