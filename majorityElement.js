function majorityElement (nums) {
  const nLen = nums.length;

  function findCandidates () {
    let m1 = -Infinity;
    let m2 = -Infinity;
    let c1 = 0;
    let c2 = 0;
  
    for (let i = 0; i < nLen; i++) {
      const n = nums[i];
      if (n === m1) c1++;
      else if (n === m2) c2++;
      else if (c1 === 0) {
        m1 = n;
        c1++;
      }
      else if (c2 === 0) {
        m2 = n;
        c2++;
      }
      else {
        c1--;
        c2--;
      }
    }
    return [m1, m2];
  }

  function validateCandidates (cands) {
    const amounts = [0,0];
    const validatedCands = [];
    const majNum = Math.floor(nLen / 3);

    function incrementCand(i, n) {
        amounts[i]++;
        if (amounts[i] > majNum) {
          validatedCands.push(n);
          cands[i] = null;
        }
    }

    for (let i = 0; i < nLen; i++) {
      const val = nums[i];
      if (val === cands[0]) incrementCand(0, val);
      else if (val === cands[1]) incrementCand(1, val);
    }

    return validatedCands;
  }

  return validateCandidates(findCandidates());
}

console.log(majorityElement([1,1,1,3,3,2,2,2]));  