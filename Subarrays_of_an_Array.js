// A subarray of an array is defined as the contiguous cross section of the array. Example: [1,2,3] has
// the following subarrays: [1],[2],[3],[1,2],[2,3].[1,2,3] Given an array print all the subarrays of the given
// array

// Example-1
// Input: [1,2,3]
// Output: [1],[2],[3],[1,2],[2,3],[1,2,3]

let nums = [1,2,3,4];

for(let i = 0; i < nums.length; i++) {
    let sub = [nums[i]];
    console.log(sub);
    
    for(let j = i+1; j<nums.length; j++) {
        sub.push(nums[j]);
        console.log(sub);
    }
}