//Return integer, number of survivors


function solution(a, b) {
    let stack = []
    let survivors = 0

    for(let i = 0; i < a.length; i++){
        //find weight 
        let weight = a[i]
        if(b[i] === 1){
            stack.push(weight)
        } else {
            let weightDown = stack.lengtg === 0 ? -1 : stack.pop()
            while (weightDown !== -1 && weightDown < weight)
                weightDown = stack.lengtg === 0 ? -1 : stack.pop()
            
                if(weightDown === -1)
                survivors += 1
                else 
                    stack.push(weightDown)
        }
    }

    return survivors + stack.length

}

console.log(solution([4, 8, 2, 6, 7], [0, 1, 1, 0, 0]))