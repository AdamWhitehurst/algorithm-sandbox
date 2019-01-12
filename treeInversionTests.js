/**
 * Tests function 'f' against each TreeNode in 'roots' for the
 * specified number of 'iterations'. Execution time is logged
 * by VSCode "Code Runner" extension in console
 * @param {function} f The function to test
 * @param {TreeNode[]} roots Array of TreeNode to test
 * @param {number} iterations How many times to run f against
 * each TreeNode in roots
 */
function test(f, roots, iterations) {
  for (const root of roots) {
    for (let i = 0; i < iterations; i++) {
      f(root);
    }
  }
}

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

/**
 * Somone else's implementation of invertTree
 * @param {TreeNode} root
 * @return {TreeNode} root of new, inverted tree
 */
function invertTreeTwo(root) {
  if (!root) return root;
  let tmp = root.left;
  root.left = root.right;
  root.right = tmp;
  invertTree(root.left);
  invertTree(root.right);
  return root;
}

/**
 * My implementation of invertTree
 * @param {TreeNode} root
 * @return {TreeNode} root of new, inverted tree
 */
function invertTree(root) {
  if (!root) return null;
  let temp = root.right;
  root.right = invertTree(root.left);
  root.left = invertTree(temp);
  return root;
}

/**
 * My implementation of invertTree using arrow notation
 * @param {TreeNode} root
 * @return {TreeNode} root of new, inverted tree
 */
let invertTreeThree = root => {
  if (!root) return null;
  let temp = root.right;
  root.right = invertTree(root.left);
  root.left = invertTree(temp);
  return root;
};

function initTree(nums) {
  function getLeft(i) {
    return 2 * i + 1;
  }
  function getRight(i) {
    return 2 * i + 2;
  }
  function buildTree(i) {
    if (!nums[i]) return null;

    const root = new TreeNode();
    root.val = nums[i];
    root.left = buildTree(getLeft(i));
    root.right = buildTree(getRight(i));
    return root;
  }
  return buildTree(0);
}

const roots = [
  initTree([1, 2, 3]),
  initTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  initTree([1, null, 2, null, null, null, 3, null, null, null, 4]),
  initTree([1, 2, null, 3, null, null, null, 4]),
  initTree([
    // All right nodes, it's like counting in binary...
    1, ///// root
    null, // root.left
    2, ///// root.right
    null, // root.left.left
    null, // root.left.right
    null, // root.right.left
    3, ///// root.right.right
    null, // root.left.left.left
    null, // root.left.left.right
    null, // root.left.right.left
    null, // root.left.right.right
    null, // root.right.left.left
    null, // root.right.left.right
    null, // root.right.right.left
    4, ///// root.right.right.right
    null, // root.left.left.left.left
    null, // root.left.left.left.right
    null, // root.left.left.right.left
    null, // root.left.left.right.right
    null, // root.left.right.left.left
    null, // root.left.right.left.right
    null, // root.left.right.right.left
    null, // root.left.right.right.right
    null, // root.right.left.left.left
    null, // root.right.left.left.right
    null, // root.right.left.right.left
    null, // root.right.left.right.right
    null, // root.right.right.left.left
    null, // root.right.right.left.right
    null, // root.right.right.right.left
    5 ////// root.right.right.right.right
  ])
];

// Test 1: My implementation of invertTree
// test(invertTree, roots, 100000000);
// console.log("invertTree test complete.");

// Test 2: someone else's implementation of invertTree
// test(invertTreeTwo, roots, 100000000);
// console.log("invertTreeTwo test complete.");

// Test 3: My implementation of invertTree
test(invertTreeThree, roots, 100000000);
console.log("invertTreeThree test complete.");

/**
----------------------------------
RESULTS: (100,000,000 iterations)
----------------------------------

invertTree test: 19.735s

invertTreeTwo test: 17.43s

invertTreeThree test: 17.106s

*/
