// Reverse Subarray to Sort Array
// Problem – Given an array of numbers. You need to find if reversing a subarray can 
// sort the array. For example – 
// Input – [1,2,5,4,3]
// Output – true (reversing {5,4,3} will sort the array)
// Approach –
// Intuition - If array is having structure like first increasing, then decreasing and then 
// again increasing, then we can say that after reversing the decreasing subarray, we 
// can get our sorted array.
// Let’s see each step –
// 1) Find Increasing subarray at the start
// 2) Find decreasing subarray
// 3) At last, check for increasing subarray
// 4) In third step, if we are unable to find elements, this also gives us case 
// where we can just reverse decreasing subarray of step 2 amd get 
// sorted array

function checkSorted(arr, n) {
    if (n == 1)
      return true;
    let i;
    for (i = 1; i < n && arr[i - 1] < arr[i]; i++);
    if (i == n)
      return true;
  
    let j = i;
    while (j < n && arr[j] < arr[j - 1]) {
      if (i > 1 && arr[j] < arr[i - 2])
        return false;
      j++;
    }
    if (j == n) // when step 3 elements not present
      return true;
  
    let k = j;
    if (arr[k] < arr[i - 1])
      return false;
    while (k > 1 && k < n) {
      if (arr[k] < arr[k - 1])
        return false;
      k++;
    }
    return true;
  }
  
  
  
  let arr = [1, 2, 14, 10, 9, 8];
  let n = arr.length;
  
  if (checkSorted(arr, n)) {
    console.log("True");
  } else {
    console.log("False");
  }