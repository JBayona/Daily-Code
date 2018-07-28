/*

Given an array of strictly the characters 'R', 'G', and 'B', 
segregate the values of the array so that all the Rs come first,
the Gs come second, and the Bs come last. You can only swap elements of the array.
Do this in linear time and in-place.

For example, given the array ['G', 'B', 'R', 'R', 'B', 'R', 'G'], it should become ['R', 'R', 'R', 'G', 'G', 'B', 'B'].

https://www.geeksforgeeks.org/sort-an-array-of-0s-1s-and-2s/

*/

function setInPlace(array) {
  let low = 0;
  let high = array.length - 1;
  let mid = 0;
  let tmp;
  while(mid <= high) {
    if(array[mid] === 'R') {
      let tmp = array[low];
      array[mid] = tmp;
      array[low++] = 'R';
    }else if(array[mid] === 'G') {
      mid++;
    } else if (array[mid] === 'B') {
      let tmp = array[high];
      array[mid] = tmp;
      array[high--] = 'B';
    }
  }
  return array;
}

let array =  ['G', 'B', 'R', 'R', 'B', 'R', 'G'];
console.log(setInPlace(array));

function setInPlaceZeroes(array) {
  let low = 0;
  let high = array.length - 1;
  let mid = 0;
  let tmp;
  while(mid <= high) {
    if(array[mid] === 0) {
      let tmp = array[low];
      array[mid] = tmp;
      array[low++] = 0;
    }else if(array[mid] === 1) {
      mid++;
    } else if (array[mid] === 2) {
      let tmp = array[high];
      array[mid] = tmp;
      array[high--] = 2;
    }
  }
  return array;
}

let array2 =  [1,0,2,1,0,0,2,0,1,1,0,1,2];
console.log(setInPlaceZeroes(array2));
