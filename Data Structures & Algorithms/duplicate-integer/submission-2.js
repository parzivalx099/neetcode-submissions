class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const filter = new Set(nums)
        const filterArray = Array.from(filter)
        // return filterArray
        // return nums
        if (nums.length == filterArray.length) {
            return false
        } else {
            return true
        }
    }
}
