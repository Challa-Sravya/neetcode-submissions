class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let numMap= new Set()
        for(let i=0;i<=nums.length-1;i++){
            if(numMap.has(nums[i])){
                return true
            }
            numMap.add(nums[i])
        }
        return false
    }
}
