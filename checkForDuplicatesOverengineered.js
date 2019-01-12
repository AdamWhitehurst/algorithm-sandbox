/**
 * One-line solutions, like ...
 *
 *     return new Set(nums).size !== nums.length;
 *
 * ... Are sooo overdone and efficient. Sometimes you just want to find
 * duplicate numbers using two inner functions, a generator, and a map!
 * @param {number[]} nums An array of numbers to find duplicate values within
 * @returns boolean Whether the array contains duplicate numbers.
 */
function containsDuplicate(nums) {
  const map = initMap();

  function initMap() {
    return new Map();
  }

  function* iterateNums() {
    for (const n of nums) {
      yield n;
    }
  }

  function overEngineeredCheckForDuplicates() {
    for (const n of iterateNums()) {
      if (map.has(n)) return true;
      else map.set(n, true);
    }
    return false;
  }

  return overEngineeredCheckForDuplicates();
}
