Two Sum

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let obj = {}
    for(let i = 0; i < nums.length;i++){
        obj[target-nums[i]] = i
    }
    for(let j = 0; j<nums.length;j++){
        if (obj[nums[j]]){
            if(obj[j] !== j){
                return [j,obj[nums[j]]]
            }
        }
    }
    
};