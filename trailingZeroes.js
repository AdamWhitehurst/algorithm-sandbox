function trailingZeroes(n) {
  let count = 0;
  let exp = 1;
  while (true) {
    const div = Math.floor(n / (5**exp));
    if (!div) return count;
    exp++;
    count += div;
  }
}

console.log(trailingZeroes(101));