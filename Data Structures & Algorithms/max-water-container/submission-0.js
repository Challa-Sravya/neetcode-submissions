class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left=0
        let right=heights.length-1
        let maxArea=0
        for(let i=0;i<heights.length;i++){
            let area=(right-left)*(Math.min(heights[right],heights[left]))
            maxArea=Math.max(maxArea,area)
            if(heights[left]<=heights[right]){
                left++
            }else{
                right--
            }
        }
        return maxArea

    }
}
