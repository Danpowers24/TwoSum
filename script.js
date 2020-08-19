// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


// define nums array
const nums = [2, 7, 11, 15]

// define target
const target = 17

const twoSum = function(nums, target) { 
    // define result array
    let result = [];  
    // loop through array
    for (let i = 0; i < nums.length; i++) { 
        // define currentNum as i 
        let currentNum = nums[i];
        console.log("in first loop, currentNum is ", currentNum)
        for (let j = i; j < nums.length; j++) {
            let secondNum = nums[j]
            console.log("in second loop, currentNum and secondNum are ", currentNum, secondNum)
            // if i === currentNum, then move on to the next number
            if (currentNum + secondNum == target) {
                console.log("in conditional, currentNum ", currentNum, " + secondNum ", secondNum, " = target ", target)
                // return an array containing the index of currentNum and j
                result.push(nums.indexOf(currentNum))
                result.push(nums.indexOf(secondNum))
                console.log("result is ", result)
                return result;
            } 
        }  
    }
};

twoSum(nums, target)

// This passed LeetCode but only because it solves for the first possible combo, any other combo breaks it