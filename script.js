// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


// define nums array
// const nums = [2, 7, 11, 15]
const nums = [3, 7, 8, 3, 9]

// define target
const target = 6

const twoSum = function(nums, target) { 
    // define result array
    let result = [];  
    // loop through array
    for (let i = 0; i < nums.length; i++) { 
        // define currentNum as i 
        let currentNum = nums[i];
        console.log("in first loop, currentNum (index) is ", currentNum, nums.indexOf(currentNum))
        for (let j = 0; j < nums.length; j++) {
            let secondNum = nums[j]
            console.log("in second loop, currentNum (index) secondNum (index) are ", currentNum, nums.indexOf(currentNum), secondNum, nums.indexOf(secondNum))
            // if currentNum + secondNum == target and they are not the same number
            if (currentNum + secondNum == target && nums[i] != nums[j]) {
                console.log("in conditional, currentNum ", currentNum, " + secondNum ", secondNum, " = target ", target)
                // return an array containing the index of currentNum and j
                result.push(nums.indexOf(currentNum))
                result.push(nums.indexOf(secondNum))
                console.log("result is ", result)
                return result;
            // else if currentNum + secondNum == target and there are 1 or 2 nums in the nums array
            } else if (currentNum + secondNum == target && nums.length < 3) {
                result.push(nums.indexOf(currentNum))
                result.push(1)
                console.log("result is ", result)
                return result;
            }
        }  
    }
};

twoSum(nums, target)

// This still fails LeetCode tests. for some reason, when the loop gets to the second 3, it checks the first one against the first one. I want it to check the first 3 against the second 3 in the array