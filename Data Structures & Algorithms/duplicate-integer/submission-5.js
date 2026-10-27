class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // 1. iterasi array nums (1)
        for (let i = 0; i < nums.length; i++) {
            // 2. iterasi array nums (2) + 1 (digunakan untuk memandingkan dengan iterasi 1)
            for (let j = i + 1; j < nums.length; j++) {
                // 3. melakukan perbadingan index i dengan index setelahnya i (i + 1 = j) 
                if (nums[i] === nums[j]) {
                    return true;
                }
            }
        }
        return false;
    }
}
