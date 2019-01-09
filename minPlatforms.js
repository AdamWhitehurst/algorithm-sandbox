function processData(input) {
  let inArr = input.split(/[\D]+/);

  const arrivals = [];
  const departures = [];
  const n = inArr[0];
  for (let i = 1; i < inArr.length; i += 2) {
    arrivals.push(parseInt(inArr[i]));
    departures.push(parseInt(inArr[i + 1]));
  }

  arrivals.sort((a, b) => {
    return a - b;
  });
  departures.sort((a, b) => {
    return a - b;
  });

  let i = 0;
  let j = 0;
  let curr = 0;
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

  console.log(total);
}

let s1 = `6
900 910
940 1200 
950 1120 
1100 1130
1500 1900
1800 2000`;

processData(s1);
