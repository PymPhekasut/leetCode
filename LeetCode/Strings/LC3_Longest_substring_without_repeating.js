//LengthOfLongestSubstring Approach

//using Sliding windoe to solve problem > represent of non repeating char we are on
//sliding window not working with ficing size

/*Solution:
Create an emoty HashMap (key/val > character/index)
Create start and max variable, set both with initial values of zero

Loop thru Input String 
    if current Character in HashMap & has index >= start
        set start to index for char found in hasmap +1

    set key/val pair on HashMap to be current Character/current index
    If length of current window is greater than ,ax
        set max to length of current window
*/


function lengthOfLongestSubstring(s){
    let windowCharMap = {};
    let windowStart = 0;
    let maxLength = 0

    for(let i = 0; i < s.length; i++) {
        const endChar = s[i]

        if(windowCharMap[endChar] >= windowStart){
            windowStart = windowCharMap[endChar] + 1

        }

        windowCharMap[endChar] = i
        maxLength = Math.max(maxLength, i - windowStart + 1)
    }

    return maxLength
}

module.exports = lengthOfLongestSubstring;