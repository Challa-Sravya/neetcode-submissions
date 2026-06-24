class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let numMap=new Map()
        for(let n of nums){
            numMap.set(n,(numMap.get(n)||0)+1)
        }
        let res=[...numMap.keys()].sort((a,b)=>numMap.get(b)-numMap.get(a)).splice(0,k)
        return res
    }
}
