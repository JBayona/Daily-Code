/*
Given an array of integers, return a new array such that each element at index i of the
new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24].
If our input was [3, 2, 1], the expected output would be [2, 3, 6].
*/

function productExceptSelf(array) {
  let left = [];
  let right = [];
  let result = [];
  let n = array.length;

  // First element in left is always 1
  left[0] = 1;
  // Last element in right is always 1
  right[n-1] = 1;

  // Construct left array
  for(let i = 1; i < n; i++) {
    left[i] = left[i-1] * array[i-1];
  } 

  //Construct right arrat
  for(let i = n - 2; i >= 0; i--) {
    right[i] = right[i+1] * array[i+1];
  }

  // Form result array
  for(let i = 0; i < n; i++) {
    result[i] = left[i] * right[i];
  }

  return result;
}

array = [1, 2, 3, 4, 5]; // [120, 60, 40, 30, 24]
// array = [3, 2, 1]; // [2, 3, 6]
console.log(productExceptSelf(array)); 