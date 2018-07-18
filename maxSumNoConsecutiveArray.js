/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Airbnb.

Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

Follow-up: Can you do this in O(N) time and constant space?

http://blog.gainlo.co/index.php/2016/12/02/uber-interview-question-maximum-sum-non-adjacent-elements/
*/

function maxSumNonAdjacent(nums){
  //DP Solution
  var exclusive = 0;
  var inclusive = nums[0];
  var tmp = 0;

  for(let i = 1; i < nums.length; i++){
    tmp = inclusive;
    inclusive = Math.max(inclusive, exclusive + nums[i]);
    exclusive = tmp;
  }
  return inclusive;
}

array = [1, 0, 3, 9, 2];
console.log(maxSumNonAdjacent(array));