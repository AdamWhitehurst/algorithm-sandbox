let m1, m2, m3;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if (n == m3 || n == m2 || n == m1) continue;
  if (m1 == null || n > m1) {
    m3 = m2;
    m2 = m1;
    m1 = n;
  } else if (m2 == null || n > m2) {
    m3 = m2;
    m2 = n;
  } else if (m3 == null || n > m3) {
    m3 = n;
  }
}
if (m3 == null || m2 == null) return m1;
return m3;
