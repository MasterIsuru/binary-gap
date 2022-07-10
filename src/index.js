/*
 * 'binaryGap' function.
 *
 * The function is expected to return a INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function binaryGap(N) {
  const indices = [];
  const binaryNumbers = N.toString(2).split("");

  for (let i = 0; i < binaryNumbers.length; i++) {
    if (binaryNumbers[i] === "1") indices.push(i);
  }
  const rev = indices.reverse();
  const min = [];
  for (let j = 0; j < rev.length; j++) {
    const minVal = rev[j] - rev[j + 1] - 1;
    if (!isNaN(minVal)) {
      min.push(minVal);
    }
  }
  return min.length ? Math.max(...min) : 0;
}

module.exports = binaryGap;
