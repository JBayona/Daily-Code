/*
This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
*/

function twoSum(array) {
  let hash = {};
  let complement = 0;
  let element;
  for(let i = 0; i < array.length; i++) {
    element = array[i];
    complement = k - element;
    if(complement in hash) {
      return true;
    } else {
      hash[element] = i;
    }
  }
  return false;
}

array = [10, 15, 3, 7];
k = 17;
console.log(twoSum(array, k));