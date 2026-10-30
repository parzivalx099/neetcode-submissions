class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // filter length
        if (s.length !== t.length) {
            return false
        }
        // init
        let countS = {}
        let countT = {}
        // loop + increment
        for (let i = 0; i < s.length; i++) {
            countS[s[i]] = (countS[s[i]] || 0) + 1
            countT[t[i]] = (countT[t[i]] || 0) + 1
        }
        // validate key
        for (let key of Object.keys(countS)) {
            if (countS[key] !== countT[key]) {
                return false
            }
        }
        return true
    }
}
