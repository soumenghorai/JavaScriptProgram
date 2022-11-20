let fourSum = function(nums) {
    let result = [];
  for(let i = 0; i<nums.length-3; i++) {
      for(let j = i+1; j<nums.length-2; j++) {
          for(let k = j+1; k<nums.length-1; k++) {
             for(let l = k+1; l<nums.length; l++) {

              if(nums[i] + nums[j] + nums[k] + nums[l] === 0) {
                  result.push([nums[i], nums[j], nums[k], nums[l]]);
              }
            }
          }
      }
  }
  return result;
};
let nums = [1,0,-1,0,-2,2];
console.log(fourSum(nums));