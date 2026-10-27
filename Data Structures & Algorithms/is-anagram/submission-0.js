class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // 1. compare s and t length
        if (s.length !== t.length) {
            return false
        }
        // 2. init object placeholder countS and countT
        let countS = {}
        let countT = {}
        // 3. for loop + increment object + init value
        for (let i = 0; i < s.length; i++) {
            countS[s[i]] = (countS[s[i]] || 0) + 1
            countT[t[i]] = (countT[t[i]] || 0) + 1
        }
        // 4. compare object key countS and countT
        for (let key of Object.keys(countS)) {
            if (countS[key] !== countT[key]) {
                return false
            } 
        }
        return true
    }
}
