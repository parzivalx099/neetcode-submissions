class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hashMap = {};
        for (let i = 0; i < nums.length ; i++) {
            // a + b = target
            // target - b = a

            let a = target - nums[i];

            if (a in hashMap) return [hashMap[a], i]

            hashMap[nums[i]] = i
        }
    }
}
