// Hamming weight count number of 1's in 0
// 11101 -> 4
// 11101000 -> 4
// 00000000 -> 0
// 678012340567 -> 10

function hammingWeight(n) {
  let oneCount = 0;
  let zeroCount = 0;
  while (n != 0) {
    let isOne = n & 1;
    if (isOne == 1) {
      oneCount++;
    } else {
      zeroCount++;
    }
    n = n >>> 1;
  }
  return { zeroCount, oneCount };
}

// console.log(hammingWeight(6)); // 110
console.log(hammingWeight(13)); // 1101
