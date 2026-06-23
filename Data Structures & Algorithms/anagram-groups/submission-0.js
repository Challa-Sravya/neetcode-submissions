class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let charMap=new Map()
        for(let word of strs){
            let sorted=word.split("").sort().join("")
            if(charMap.has(sorted)){
                charMap.get(sorted).push(word)
            }
            else{
                charMap.set(sorted,[word])
            }
        }
        return Array.from(charMap.values())
    }
}
