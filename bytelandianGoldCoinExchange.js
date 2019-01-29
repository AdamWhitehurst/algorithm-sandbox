/**
In Byteland they have a very strange monetary system.
Each Bytelandian gold coin has an integer number written on it.
A coin n can be exchanged in a bank into three coins: n/2, n/3 and n/4.
But these numbers are all rounded down (the banks have to make a profit).
You can also sell Bytelandian coins for USD; the exchange rate is 1:1.
You can not buy Bytelandian coins.

What is the maximum amount of USD you can get for bytelandian coin n?
*/

/**
EXAMPLE:

Input:
12
2

Output:
13
2

*/

// Relation: state[n] = max(exchange(n), exchange(Math.floor(n/2)) + exchange(Math.floor(n/3)) + exchange(Math.floor(n/4));

function bytelandianGoldExchange(n) {
  const memo = new Array(n + 1);

  function exchange(n) {
    if (n < 12) return n;
    if (memo[n] === undefined) {
      memo[n] = Math.max(
        n,
        exchange(Math.floor(n / 2)) +
          exchange(Math.floor(n / 3)) +
          exchange(Math.floor(n / 4))
      );
    }
    return memo[n];
  }

  return exchange(n);
}

console.log(1, bytelandianGoldExchange(1));
console.log(2, bytelandianGoldExchange(2));
console.log(3, bytelandianGoldExchange(3));
console.log(4, bytelandianGoldExchange(4));
console.log(5, bytelandianGoldExchange(5));
console.log(6, bytelandianGoldExchange(6));
console.log(7, bytelandianGoldExchange(7));
console.log(8, bytelandianGoldExchange(8));
console.log(9, bytelandianGoldExchange(9));
console.log(10, bytelandianGoldExchange(10));
console.log(11, bytelandianGoldExchange(11));
console.log(12, bytelandianGoldExchange(12));
console.log(13, bytelandianGoldExchange(13));
console.log(24, bytelandianGoldExchange(24));
console.log(244, bytelandianGoldExchange(244));
