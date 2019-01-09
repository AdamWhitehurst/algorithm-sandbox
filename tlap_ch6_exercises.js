/**
 * 
 * Recursion Excercise problems
 * REFERENCE: https://nostarch.com/thinklikeaprogrammer
 * 
 */

/** 6-1
Write a function to compute the sum of just the positive numbers in an array
of integers. First solve the problem using iteration. Then, using the technique
shown in this chapter, convert your iterative function to a recursive function.
 */

function computePositiveSumIteratively (nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (n > 0) sum += n;
  }
  return sum;
}

function computePositiveSumIterativelyDispatcher (nums) {
  if (nums.length == 0) return null;
  let n = nums[nums.length - 1];
  n = Math.max(n, 0);
  return computePositiveSumIteratively(nums.slice(0, nums.length-1)) + n;
}

function computePositiveSumRecursively (nums) {
  if (nums.length == 0) return null;
  let n = nums[nums.length - 1];
  let sumRestNums = computePositiveSumRecursively(nums.slice(0, nums.length-1));
  if (n > 0) sumRestNums += n;
  return sumRestNums;
}

console.log("computePositiveSumIteratively: " + ((computePositiveSumIteratively([-1,-2,-3,0,1,2,3]) === 6) ? "SUCCESS" : "FAILED"));
console.log("computePositiveSumIterativelyDispatcher: " + ((computePositiveSumIterativelyDispatcher([-1,-2,-3,0,1,2,3]) === 6) ? "SUCCESS" : "FAILED"));
console.log("computePositiveSumRecursively: " + ((computePositiveSumRecursively([-1,-2,-3,0,1,2,3]) === 6) ? "SUCCESS" : "FAILED"));