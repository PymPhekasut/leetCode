// find longest unique sub strings


function longestUniqueSubstr(str){
    let maxLength = 0 // to store the length of the longest unique substring
    let start = 0
    let lastIndex = {}

    for(let i =0; i < str.length; i++){
        let char = str[i] // current char
        //If the character was seen and witinh the current substring
        if(lastIndex[char] >= start){
            start = lastIndex[char] + 1
        }
        lastIndex[char] = i  // Update the last seen index of the character

        let currentLength = i - start + 1 // calculate the current index of the substring
        maxLength = Math.max(maxLength, currentLength) // update maxlength if the current one is longer
    }
    return maxLength
}

// console.log(longestUniqueSubstr("geeksforgeeks"));



// Maximum consecutive repeating character in string
function maxRepeating(str){
   let maxCount = 0 // To keep track of the max number of repeating characters
   let curCount = 1 // To count the current sequence of repeating characters
   let res = str[0] // To store the character with the maximum repeats 

   for(let i =1; i < str.length; i++){
    // If the current character is the same as the previous one
    if( str[i] === str[i -1]){
        curCount ++ // Increase the current count
    }else {
        // If cuurent sequence is greater than the maximum found, then update max count
        if( curCount > maxCount){
            maxCount = curCount 
            res = str[i -1] //update the result with the current character
        }
        curCount =1 //Reset current count for the new character

    }
   }
   //After loop, we need to check the last character sequence
   if( curCount > maxCount){
    maxCount = curCount //update the largest
    res = str[str.length - 1] //update the result to the last character
   }

   return res
}

// console.log(maxRepeating("aaaabbcbbb")); // Output: "a"


// Check if two string are anagram 
function areAnagrams(s1,s2){
    // sort both string and compare
    return s1.split('').sort().join('') === s2.split('').sort().join('')
}

// console.log(areAnagrams("listen", "silent")); // Output: true
// console.log(areAnagrams("hello", "world"));   // Output: false


// Print all anagram together
function findAllAnagram(words){
  let anagramGroup = {} // create an object to hold anagram group

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
    let balance = 0 // keep track of the balance of parentheses

    for(let i = 0; i < str.length; i++){
        let c = str[i]
        if( c === '('){
            balance++  //If we find an opening paranthesis, increate the balnace
        } 
        else if (c === ')'){
            balance--  // If we find a closing parenthesis, decrease the balance
        }
        // If balance goes negative, it means there's closing parenthesis without a matching opening one
        if( balance < 0){
            return 0 //Not balance
        }
    }
    return balance === 0 ? true : false     // If balance is zero, all parenthesis are match

}

// console.log(checkParentheses("()(())()"))
// console.log(checkParentheses("()(())(("))
// console.log(checkParentheses("()(())))"))


function sentencePalindrome(str){
    let cleanedStr = ""
    // Loop through each character in the input string
    for(let i = 0; i < str.length; i ++){
        let char = str[i]
        //check if the character is alphanumeric
        if(/[a-zA-Z0-9]/.test(char)){
            cleanedStr += char.toLowerCase()
        }
    }
    let reversedStr = cleanedStr.split("").reverse().join("")
    return cleanedStr === reversedStr   // check if the cleaned string = its reverse
}

// Example usage
// const str = "Too hot to hoot.";
// sentencePalindrome(str) ?  console.log("Sentence is a palindrome") :  console.log("Sentence is not a palindrome");



