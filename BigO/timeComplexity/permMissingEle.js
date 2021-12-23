
//permanent missing element from cardinality


function solution(a) {
    let actualSum = 0
    a.forEach(number => actualSum += number) //actual = actual + number
    // 2 + 0
    // 3 + 2
    // 1 + 5
    // 5 + 6
    //11

    let MaxNumber = a.length + 1 // 1 - 11 with one missing
    let expectSum = (MaxNumber * (MaxNumber + 1) / 2)

    //15 - 11
    return expectSum - actualSum
}

console.log(solution([2,3,1,5]))