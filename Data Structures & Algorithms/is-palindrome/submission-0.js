class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isAlphanumeric(char){
        return(
            (char>='a'&&char<='z')||
            (char>='A'&&char<='Z')||
            (char>='0'&&char<='9')
        )
    }
    isPalindrome(s) {
        let newstr=''
        for(let char of s){
            if(this.isAlphanumeric(char)){
                newstr+=char.toLowerCase()
            }
        }
        return newstr===newstr.split('').reverse().join('')
    }
}
