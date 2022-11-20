// Sort Array of 0,1
// Given an array having 0,1 as input.We need to write a function that sorts the array in ascending order without using inbuilt 
// sort function
// Expected time complexity :O(n)
// Expected space complexity:O(1)
// Example:
// Input: {0, 1, 1,0, 0, 1}
// Output: {0, 0, 0, 1, 1, 1}
// Input:{0,0,1,1,0,1,0}
// Output:{0,0,0,0,1,1,1}
// Approach:
// We divide the array into three parts .Part one containing the zeros,second part containing the values 
// which can be zero or one and the last part containing one.If the element in second part is zero will 
// reduce the size of second part,if the element is one will move it to the third part and reduce the size 
// of second part. 
// Algorithm
// 1)We will have two indices mid=0,end=N and there are three parts 
// (0,mid):the elements here will be 0
// (mid,end):the elements here can be 0,1
// (end,N):the elements here will be 1
// Where N = size of the array
// 2)We will be traversing the array from start to end until mid is less than end
// 3)If the mid element is 0,increment mid by one
// 4)If the mid element is 1,will swap with the element at index end and decrement the value of end by 
// one
// 6)We will continue doing this till the mid value is less than the end.


// function to sort an array containing 0,1, and return the sorted array 
function sortZeroOne(input, size) {
  let mid = 0;
  let end = size-1;
  let swap = 0; //variable for swapping 
  while (mid <= end) {
    if (input[mid] == 0) {
      mid++;
    } else {
      swap = input[end];
      input[end] = input[mid];
      input[mid] = swap;
      end--;
    }
  }
  return input;
}
var input = [1,1,1,0,0,1,1,0,0,0,1,0,1,0,1];
var size = input.length;
var output = sortZeroOne(input, size);
console.log(output);
