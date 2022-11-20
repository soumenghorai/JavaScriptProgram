// You have an array of n elements. Your job is to find the element that is in majority.
// Any element whose count is greater than n/2 will be considered as a majority element.

// Example-1:
// Input: [3,1,3,3,2]
// Output: 3

// First example
let nums = [1,2,4,2,2,8,2,8,2,2];

let maxCount = 0;

for(let i = 0; i< nums.length; i++) {
    
    let count = 0;
    for(let j = i; j<nums.length; j++) {
        if(nums[i] == nums[j]) {
            count++;
        }
    }
    if(count > maxCount) {
        maxCount = count;
    }
}

if(maxCount > nums.length/2) {
    console.log(true);
} else {
    console.log(false);
}

// Second example
// function test(nums) {

//     let map = {};
    
//     for(let num of nums) {
//         map[num] = (map[num] || 0) + 1;
//     }
    
//     for(let value of Object.values(map)) {
//         if(value > nums.length/2) {
//             return true;
//         }
//     }
//     return false;

// }
