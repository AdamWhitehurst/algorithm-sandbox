// Given an array of time intervals (start, end) for classroom lectures
// (possibly overlapping), find the minimum number of rooms required.
// For example, given [(30, 75), (0, 50), (60, 150)], you should return 2.

// 75 - 30  = 35  -> (30, 45)
// 50 - 0   = 50  -> (0, 50)
// 150 - 60 = 110 -> (60, 110)

// classTimes = [
//  [number, number],
//  [number, number],
//  ...
// ]

function minClassrooms(classTimes) {
  const arrivals = [],
    departures = [],
    n = classTimes.length;
  for (let i = 0; i < n; i++) {
    arrivals.push(classTimes[i][0]);
    departures.push(classTimes[i][1]);
  }

  arrivals.sort((a, b) => {
    return a - b;
  });
  departures.sort((a, b) => {
    return a - b;
  });

  let i = 0,
    j = 0,
    curr = 0;
  let total = 0;
  while (i < n && j < n) {
    if (arrivals[i] < departures[j]) {
      curr++;
      i++;
      if (curr > total) {
        total = curr;
      }
    } else {
      curr--;
      j++;
    }
  }

  return total;
}

const ct1 = [
  [30, 75],
  [0, 50],
  [20, 60],
  [40, 90],
  [10, 30],
  [25, 70],
  [25, 95],
  [60, 150]
];

const ct2 = [[30, 75], [5, 50], [5, 45], [20, 60]];

const ct3 = [[5, 95], [95, 105]];

const ct4 = [...ct1, ...ct2, ...ct3];

console.log(minClassrooms(ct1));
console.log(minClassrooms(ct2));
console.log(minClassrooms(ct3));
console.log(minClassrooms(ct4));
