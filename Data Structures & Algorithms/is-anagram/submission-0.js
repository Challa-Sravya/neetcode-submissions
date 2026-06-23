class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!==t.length){
            return false
        }
        let numMap=new Map()
        for(let char of s){
            numMap.set(char,(numMap.get(char)||0)+1)
        }
        for(let char of t){
            numMap.set(char,(numMap.get(char)||0)-1)
        }
       for(let count of numMap.values()){
        if(count!==0)
        return false
       }
        return true
    }
}

 