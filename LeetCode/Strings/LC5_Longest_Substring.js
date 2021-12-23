


//Given a string s, find the longest palindrome substring in s
// Example 
// pair same even char

//longestPalindrome("cbbd") --> "bb"
//longestPalindrome("abba") --> "abba"
//longestPalindrome("a") --> "a"


function longestPalindrome(s){
    let startIndex =  0;
    let maxLength = 1;

    function expandAroundMiddle(left, right){
        while(left >= 0 && right < s.length && s[left] === s[right]){
            const currentPalLenght = right - left + 1
            if(currentPalLenght > maxLength){
                maxLength = currentPalLenght
                startIndex = left
            }
            left -= 1;
            right += 1;
        }
    }

    for(let i = 0; i < s.length; i++){
        expandAroundMiddle(i - 1, i + 1)
        expandAroundMiddle(i, i + 1)
    }

    return s.slice(startIndex, startIndex + maxLength)


}

module.exports = longestPalindrome