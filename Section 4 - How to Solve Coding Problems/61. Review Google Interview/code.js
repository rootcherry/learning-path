// Naive
function hasPairsWithSum(arr, sum) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + j; j < len; j++) {
      if (arr[i] + arr[j] === sum) {
        return true;
      }
    }
  }
  return false;
}

// Better
function hasPairsWithSum2(arr, sum) {
  const mySet = new Set();
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
  }
  return false;
}

console.log(hasPairsWithSum2([6, 4, 3, 2, 1, 7], 9));
