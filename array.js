//twoSum
function twoSum(arr, target){
    // To store the number element if complement is not found yet
    const set = new Set()

    for(let i = 0; i < arr.length; i++){
        let complement = target - arr[i] // 9 - 2 = 7
        if(set.has(complement)){
            console.log(`${arr[i]} + ${complement} = ${target}`)
            return true
        }
        set.add(arr[i])
    }
    return false
}

console.log("twoSum:: ", twoSum([2,6,8,11,7], 9))


// Stock Buy and Sell – Max one Transaction Allowed
function maxProfit(arr){
    let minPrice = arr[0]
    let res = 0

    for(let i = 1; i < arr.length; i++){
        // Get minimum price and update
        minPrice = Math.min(minPrice, arr[i])
        // Get Maximum price and update
        res = Math.max(res, arr[i] - minPrice)
    }
    return res
}

const prices = [7, 10, 1, 3, 6, 9, 2];
console.log("maxProfit" ,maxProfit(prices));


// Find duplicates number
function findDuplicateNumber(numbers){
    let newArr = new Array(numbers.length).fill(0)
    let result = []

    for(const num of numbers){
        newArr[num]++

        if(newArr[num] === 2){
            result.push(num)
        }
    }
    return result
}
const numbers = [8, 2, 3, 2, 6, 4, 6];
console.log("findDuplicateNumber" ,findDuplicateNumber(numbers));


// Find duplicates string
function findDuplicatedString(strings){
    let charCount = {} //to store count of each string {"A": 1}
    let result = [] // to store duplicated string

    for(const str of strings){
        charCount[str] = (charCount[str] || 0) + 1
        if(charCount[str] > 1){
            result.push(str)
        }
    }
    return result
}
// const repeatedString = ["a", "b", "c", "a"];
// console.log("findDuplicatedString" ,findDuplicatedString(repeatedString));



// Maximum Subarray Sum using Kadane's Algorithm
function maxSubarraySum(arr){
    let res = arr[0]
    let maxEnding = arr[0]

    for(let i = 1; i < arr.length; i++){
        // Find the maximum at the index i 
        // The maximum sum subarray at the index i - 1
        // Start a new subarray from index i
        maxEnding = Math.max(maxEnding + arr[i], arr[i])
        // Update res if maximum subarray sum ending at the index i > res
        res = Math.max(res, maxEnding)

    }
    return res
}

// const arr = [2, 4, -6, 9, -1, 2, 3];
//console.log("maxSubarraySum:: ", maxSubarraySum(arr));

// Function to find the minimum value
function findMin(arr){
    let res = arr[0]
    for(let i = 1; i < arr.length; i++){
        res = Math.min(res, arr[i])
    }
    return res
}
// const arr = [5, 6, 1, 2, 3, 4];
// console.log(findMin(arr));


//  find triplets in a given array whose sum is zero
function findPairs(arr, start, target, firstEle){
    const st = new Set()
    const result = []
    // Loop through array from the start index
    for(let i = start; i < arr.length; i++){
        const thirdEle = target - arr[i]
        // two sum solution
        if(st.has(thirdEle)){
            result.push([firstEle, arr[i], thirdEle])
        }
        // Insert the current element into the set
        st.add(arr[i])
    }
    return result
}

function findTriples(arr){
    const result = [];
    for(let i =0; i < arr.length; i++){
        //Remain sum for two sum
        const target = -arr[i]

        //Find pair in arr
        const pairs = findPairs(arr, i+1, target, arr[i])
        result.push(...pairs)
    }
    return result
}

const arr = [ 0, -1, 2, -3, 1 ];
const result = findTriples(arr);

if (result.length === 0) {
    console.log("No Triplet Found");
}
else {
    result.forEach(
        t => console.log(`${t[0]} ${t[1]} ${t[2]}`));
}