/*
This problem was asked by Google.

The power set of a set is the set of all its subsets. Write a function that, given a set, generates its power set.

For example, given the set {1, 2, 3}, it should return {{}, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}}.

You may also use a list or array to represent a set.
*/

function generateSubsets(array) {
  let start = 0;
  let end = array.length - 1;
  let result = [];
  let currArr = [];
  if(array.length === 0) {
    return [];
  }
  // Sort the array so we avoid duplicate combinations
  array.sort((a,b) => a - b);
  helper(start, end, currArr, array, result);
  return result;
}

function helper(start, end, currArr, array, result) {
  result.push(currArr);

  for(let i = start; i <= end; i++) {
    currArr.push(array[i]);
    helper(i+1, end, currArr.concat(), array, result);
    currArr.pop();
  }
}

array = [1, 2, 3];
console.log(generateSubsets(array));