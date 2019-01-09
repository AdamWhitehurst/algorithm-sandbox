/**
 * @param {number[]} nums
 * @return {number}
 */

function recursiveRob (nums) {
  let saved = new Array (nums.length).fill(-Infinity);
  function shouldRob(i) {
    if (i < 0) return 0;
    else if (saved[i] > -1) return saved[i];
    let result = Math.max(shouldRob(i-2) + nums[i], shouldRob(i-1));
    saved[i] = result;
    return result;
  }

  return shouldRob (nums.length - 1);
}


function iterativeRob (houses) {
  if (houses.length == 0) return 0; // Nothing to compute here.

  // Idea: total value of robbing some house (i) is maximum value of robbing
  // previous house (i-1) OR sum of robbing house (i) and (i-2), the house 
  // before the previous house
  let saved = new Array (houses.length + 1); // save memo of maximum values
  // Base cases
  saved[0] = 0; // no value in robbing anything before first house
  saved[1] = houses[0]; // value of robbing first house is its own value
  // determine all of the values
  for (let i = 1; i < houses.length; i++) {
    saved[i+1] = Math.max(saved[i-1] + houses[i], saved[i]);
  }
  // The last value in the saved memo is the highest value achievable
  return saved[houses.length];
}

function rob (houses) { // Like a true fibonacci
  if (houses.length == 0) return 0; // Nothing to compute here.
  // Idea: total value of robbing some house (i) is maximum value of robbing
  // previous house (i-1) OR sum of robbing house (i) and (i-2), the house 
  // before the previous house. Notice that we only ever care about (i),
  // (i-1), and (i-2). So, we only need to store those values.
  let prevTwo = 0;
  let prev = houses[0];
  for (let i = 1; i < houses.length; i++) {
    let temp = Math.max(prevTwo + houses[i], prev);
    prevTwo = prev;
    prev = temp;
  }
  return prev;
}


const houses = [2,1,1,9,3,7];

for (let i = 0; i < 10000000; i++) {
  rob(houses);
}

console.log("Done");