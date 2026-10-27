class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // 1. iterasi 1
        for (let i = 0; i < nums.length; i++) {
        // 2. iterasi 2
            for (let j = i + 1; j < nums.length; j++) {
        // 3. perbandingan
                if (nums[i] === nums[j]) {
                    return true;
                }
            }
        }
        return false;
    }
}
