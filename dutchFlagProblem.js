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

function setInPlace(array) {
  let result = [];
  let count0 = 0;
  let count1 = 0;
  let count2 = 0;
  let tmp = 0
  
  for(let i = 0; i < array.length; i++) {
    if(array[i] === 0) {
      count0++;
    }
    if(array[i] === 1) {
      count1++;
    }
    if(array[i] === 2) {
      count2++;
    }
  }

  // Set 0's
  for(let i = 0; i < count0; i++) {
    result[tmp++] = 0;
  }
  
  // Set 1´s
  for(let i = 0; i < count1; i++) {
    result[tmp++] = 1;
  }
  
  // Set 2´s
  for(let i = 0; i < count2; i++) {
    result[tmp++] = 2;
  }
  
  return result;
}

array = [0,1,0,2,0,1,0,1,2,2,1,0];
console.log(setInPlace(array));

function setInPlace(array) {
  let result = [];
  let count0 = 0;
  let count1 = 0;
  let count2 = 0;
  
  for(let i = 0; i < array.length; i++) {
    if(array[i] === 0) {
      count0++;
    }
    if(array[i] === 1) {
      count1++;
    }
    if(array[i] === 2) {
      count2++;
    }
  }
  
  // Set 0's
  for(let i = 0; i < count0; i++) {
    result[i] = 0;
  }
  
  // Set 1´s
  for(let i = count0; i < (count0 + count1); i++) {
    result[i] = 1;
  }
  
  // Set 2´s
  for(let i = (count0 + count1); i < array.length; i++) {
    result[i] = 2;
  }
  
  return result;
}

array = [0,1,0,2,0,1,0,1,2,2,1,0];
console.log(setInPlace(array));
