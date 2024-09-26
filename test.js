

//2sum
function twoSum(arrNums, target){
    // set to store nums 
    const set = new Set()
    for(let i = 0; i < arrNums.length; i++){
        let complement = target - arrNums[i]
        if(set.has(complement)){
            console.log(`${arrNums[i]} + ${complement} = ${target}`)
            return true
        }
        set.add(arrNums[i])
    }
    return false
}
//console.log("twoSum:: ", twoSum([2,6,8,11,7], 9))

//fix max profit, when to buy and sell stock
function maxProfit(arrNums){
    let minPrice = arrNums[0]
    let res = 0

    for(let i = 1; i < arrNums.length; i++){
        minPrice = Math.min(minPrice, arrNums[i])
        res = Math.max(res, arrNums[i] - minPrice)
    }
    return res
}
// console.log("maxProfit" ,maxProfit([7, 10, 1, 3, 6, 9, 2]));

//Find duplicate number
function findDuplicateNumbers(arrNums){

    let newArr = new Array(arrNums.length).fill(0)
    let result = []

    for (const num of arrNums){
        newArr[num]++

        if(newArr[num] > 1){
            result.push(num)
        }
    }
    return result
}

// console.log("findDuplicateNumber" ,findDuplicateNumbers([8, 2, 3, 2, 6, 4, 6]));

// Find duplicate string
function findDuplicatedString(strings){
    let countMap = {}
    let result =[]

    for(const str of strings){
        
        countMap[str] = (countMap[str] || 0) +1
        if(countMap[str] > 1){
            result.push(str)
        }
    }
    return result
}
// console.log("findDuplicatedString" ,findDuplicatedString(["a", "b", "c", "a"]));

// Find maximum subarray
function maxSubarraySum(arrNums){
    let maxEnding = arrNums[0]
    let res = arrNums[0]

    for(let i = 1; i < arrNums.length; i++){
        maxEnding = Math.max(maxEnding + arrNums[i], arrNums[i])
        res = Math.max(res, maxEnding )
    }
    return res
}
// console.log("maxSubarraySum:: ", maxSubarraySum([2, 4, -6, 9, -1, 2, 3]));

//find min
function findMin (arrNums) {
    let min = arrNums[0]

    for (let i = 1; i < arrNums.length; i++){
        min = Math.min(min, arrNums[i])
    }
    return min
}
console.log(findMin([5, 6, 1, 2, 3, 4]));


// 3sum
function findPairs(arrNum, start, target, firstEle){
    let result = []
    const st = new Set()

    for(i = start; i < arrNum.length; i++){
        let thirdEle = target - arrNum[i]
        if(st.has(thirdEle)){
            result.push([firstEle, arrNum[i], thirdEle])
        }
        st.add(arrNum[i])
    }
    return result
}

function findTriples(arrNum){
  let result = []

  for(i = 0; i < arrNum.length; i++){
    target = -arrNum[i]
    const pairs = findPairs(arrNum, i+1, target, arrNum[i])
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