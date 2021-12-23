
//Cyclic Rotation
//every item in our list shift to the rights
// K is number we need to perform how many step

//Question: return an array, with contentes rotated by K time to right

function solution(a, k){
    let result = new Array(a.length)
    for(let i = 0; i < result.length; i++) {
        result[(i + k) % a.length] = a[i]
    }

    return result

}

console.log(solution([7,2,8,3,5], 2))