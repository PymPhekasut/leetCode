

//solution(n, a)
// a is array
// n is the size of counter 

//Solution: 


//increase(3)
//increase(4)
//increase(4)
//max counter >> every start from 2 
//increase(1)
//increase(4)
//increase(4)

//2 time of 4 at beginning
//so max number now is 2

// 3 2 2 4 2



//QUESTION: return [] with counter results. Ex. [3, 2, 2, 4, 2]

function solution(n, a){
    let counters = new Array(n).fill(0)
    let startLine = 0
    let currentMax = 0

    a.forEach(instruction => {
        //the input instruction start from one
        let index = instruction - 1
        //when we have max counter instead of resetting all
        if(instruction > n) startLine = currentMax
        else if(counters[index] < startLine)  counters[index] = startLine + 1
        else counters[index] += 1

        //update currentMax
        if(instruction <= n && counters[index] > currentMax) currentMax = counters[index]
    })

    for(let i = 0; i < counters.length; i++){
        if(counters[i] < startLine) counters[i] = startLine
    }

    return counters
}

console.log(solution(5, [3,4,4,6,1,4,4]))

//[ 3, 2, 2, 4, 2 ]