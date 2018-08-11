/*

Given an array of integers, find the subset of non-adjacent elements with the maximum sum. Calculate the sum of that subset.

For example, given an array  we have the following possible subsets:

https://www.hackerrank.com/challenges/max-array-sum/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dynamic-programming

*/


function maxSubsetSum(arr) {
  let inclusive = arr[0];
  let exclusive = Number.MIN_SAFE_INTEGER;
  let tmp = 0;
  for(let i = 1; i < arr.length; i++) {
    tmp = Math.max(inclusive, exclusive);
    inclusive = exclusive + arr[i] > arr[i] ? exclusive + arr[i] : arr[i];
    exclusive = tmp;
  }
  
  return Math.max(inclusive, exclusive);
}


array = [-2, 1, 3, -4, 5];
console.log(maxSubsetSum(array));
