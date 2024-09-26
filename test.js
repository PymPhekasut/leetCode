

//2sum
function twoSum(arrNums, target){
   
    const set = new Set()
    for(let i = 0; i < arrNums.length; i++){
        let complement = target - arrNums[i]
        if(set.has(complement)) {
            console.log(`${arrNums[i]} + ${complement} = ${target}`)
            return true
        }
        set.add(arrNums[i])
    }
    return false
}
// console.log("twoSum:: ", twoSum([2,6,8,11,7], 9))

//fix max profit, when to buy and sell stock
function maxProfit(arrNums){
    let minPrice = arrNums[0]
    let res = 0

    for(let i = 0; i < arrNums.length; i++){
        minPrice = Math.min(minPrice, arrNums[i])
        res = Math.max(res, arrNums[i] - minPrice)
    }
    return res
}
// console.log("maxProfit" ,maxProfit([7, 10, 1, 3, 6, 9, 2]));

//Find duplicate number
function findDuplicateNumbers(arrNums){
    let result = []

    let countNum = new Array(arrNums.length).fill(0)
    for(const num of arrNums){
        countNum[num]++
        if(countNum[num] > 1){
            result.push(num)
        }
    }
    return result
}

//  console.log("findDuplicateNumber" ,findDuplicateNumbers([8, 2, 3, 2, 6, 4, 6]));


// Find duplicate string
function findDuplicatedString(strings){
    let result = []
    let charCount = {}

    for (const str of strings){
        charCount[str] = (charCount[str] || 0)+ 1
        if(charCount[str] > 1){
            result.push(str)
        }
    }
   return result
}
//console.log("findDuplicatedString" ,findDuplicatedString(["a", "b", "c", "a"]));



// Find maximum subarray
function maxSubarraySum(arrNums){
    let maxEnding = arrNums[0]
    let res = arrNums[0]

    for(let i = 1; i < arrNums.length; i++){
        maxEnding = Math.max(maxEnding + arrNums[i], arrNums[i])
        res = Math.max(res, maxEnding)
    }
    return res
}
//  console.log("maxSubarraySum:: ", maxSubarraySum([2, 4, -6, 9, -1, 2, 3]));


 

//find min
function findMin (arrNums) {
    let minPrice = arrNums[0]
    for(let i = 1; i < arrNums.length; i++){
        minPrice = Math.min(minPrice, arrNums[i])
    }
    return minPrice
   
}
//console.log(findMin([5, 6, 1, 2, 3, 4]));



// 3sum
function findPairs(arrNum, start, target, firstEle){
    let result =[]
    let set = new Set()

    for(let i = start; i < arrNum.length; i++){
        let thirdEle = target - arrNum[i]
        if(set.has(thirdEle)){
            result.push([firstEle, arrNum[i], thirdEle])
        }
        set.add(arrNum[i])
    }
    return result
}

function findTriples(arrNum){
  let result =[]

  for(let i =0; i < arrNum.length; i++){
    const target = -arrNum[i]
    const pair = findPairs(arrNum, i+1, target, arrNum[i])
    result.push(...pair)
  }
  return result
}

// const arr = [ 0, -1, 2, -3, 1 ];
// const result = findTriples(arr);

// if (result.length === 0) {
//     console.log("No Triplet Found");
// }
// else {
//     result.forEach(
//         t => console.log(`${t[0]} ${t[1]} ${t[2]}`));
// }



// find longest unique sub strings


function longestUniqueSubstr(str){
    let maxLength = 0
    let start = 0
    let lastIndex = {}

    for(let i =0; i < str.length; i++){
        let char = str[i]

        if(lastIndex[char] >= start){
            start = lastIndex[char] + 1
        }
        lastIndex[char] = i
        currentLength = i - start + 1
        maxLength = Math.max(maxLength, currentLength)
    }
    return maxLength
}

// console.log(longestUniqueSubstr("abcabcbb"));



// Maximum consecutive repeating character in string
function maxRepeating(str){
     let maxCount = 0
     let curCount = 1
     let res = str[0]

    for(let i = 0; i < str.length; i++){
        if(str[i] === str[i - 1]){
            curCount++
        }else{
            if(curCount > maxCount){
                maxCount = curCount
                res = str[i - 1]
            }
            curCount = 1
        }
    }
    if(curCount > maxCount){
        maxCount = curCount
        res = str[str.length - 1]
    }
    return res
}

// console.log(maxRepeating("aaaabbcbbb")); // Output: "a"


// Check if two string are anagram 
function areAnagrams(s1,s2){
    const result = s1.split('').sort().join("") === s2.split('').sort().join("")
    return result
}

// console.log(areAnagrams("listen", "silent")); // Output: true
// console.log(areAnagrams("hello", "world"));   // Output: false


// Print all anagram together
function findAllAnagram(words){
    let anagramGroup = {}

    for(const word of words){
        let key = word.split('').sort().join("")
        if(!anagramGroup[key]){
            anagramGroup[key] = []
        } 
        anagramGroup[key].push(word)
    }
return Object.values(anagramGroup)
}

// let user_input = ["cat", "dog", "tac", "edoc", "god", "tacact",
//     "act", "code", "deno", "node", "ocde", "done", "catcat"];
//     console.log(findAllAnagram(user_input));


//Check if given Parentheses expression is balanced or not
function checkParentheses(str){
    let balance = 0
    
    for(let i = 0; i  < str.length; i++){

        if(str[i] === '('){
            balance++
        }

        if(str[i] === ')'){
            balance--
        }

        if(balance < 0){
            return 0
        }
    }

    return balance === 0 ? true : false

}

// console.log(checkParentheses("()(())()"))
// console.log(checkParentheses("()(())(("))
// console.log(checkParentheses("()(())))"))


function sentencePalindrome(str){
    let cleanedStr = ""

    for(let i =0; i < str.length; i++){
        let char = str[i]
        if(/[a-zA-z0-9]/.test(char)){
            cleanedStr = char.toLowerCase()
        }
    }
    let reverseStr = cleanedStr.split("").reverse().join("")
    return reverseStr === cleanedStr
}

// Example usage
// const str = "Too hot to hoot.";
// sentencePalindrome(str) ?  console.log("Sentence is a palindrome") :  console.log("Sentence is not a palindrome");



