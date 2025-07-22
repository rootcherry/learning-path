// Given 2 arrays, create a function that let's a user know (true/false) wether these two arrays contain any common items
// For example:
// const array1 = ["a", "b", "c", "x"];
// const array2 = ["z", "y", "i"];
// should return false.
// -----------
const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "b"];
// should return true.

// brute force approach (note the best O(n^2))
const containsCommonItem = (arrayOne, arrayTwo) => {
  for (let i = 0; i < arrayOne.length; i++) {
    for (let j = 0; j < arrayTwo.length; j++) {
      if (arrayOne[i] === arrayTwo[j]) {
        return true;
      }
    }
  }
  return false;
};

// O(a*b)
// O(1) - Space Complexity

//console.log(containsCommonItem(array1, array2));

// better approach
function containsCommonItem2(arr1, arr2) {
  // loop through first array and create object where properties === items in the array
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  // loop through second array and check if item in second array exists on created object
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}

// O(a + b) - Time Complexity
// O(a) - Space Complexity

//console.log(containsCommonItem2(array1, array2));

// One line solution
function containsCommonItem3(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}

console.log(containsCommonItem3(array1, array2));
