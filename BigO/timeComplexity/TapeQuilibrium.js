//Painful difficulty

// QUESTION: To return abs diff, 
// where abs diff between left and right (split at P ) is at minimum

//[3,1,2,4,3]
// We can try to split them per one step as summary them
// 3 | 10 = 7
// 4 | 9  = 5
// 6 | 7  = 1 >> right answer
// 10| 3  = 7

function solution(a) {

    //first element of input
    let leftSum = a[0]
    let rightSum = 0

    //We pick 3 already for leftSum so next number start from 1
    a.slice(1).forEach(number => rightSum += number)
    
    //rightSum = 0 + 1
    //rightSum = 1 + 2
    //rightSum = 3 + 4
    //rightSum = 7 + 3

    //Math.abs to return different/remain of value
    let diff = Math.abs(leftSum - rightSum) // 3 - 10
    for (let i =1; i < a.length - 1; i++) 
    // -1 stop one position before the end
    //1
    //2
    //3
    
    {
        leftSum += a[i]
        //leftSum = 3 + 1
        //leftSum = 4 + 2
        //leftSum = 6 + 4
        rightSum -= a[i]
        //rightSum = 10 - 1
        //rightSum = 9 - 2
        //rightSum = 7 - 4

        // 4 | 9  = 5
        // 6 | 7  = 1 >> right answer
        // 10| 3  = 7
        
        let currentDiff = Math.abs(leftSum - rightSum)
        // 10 - 3
        if (diff > currentDiff)diff = currentDiff
        
    }

    return diff
}

console.log(solution([3,1,2,4,3]))