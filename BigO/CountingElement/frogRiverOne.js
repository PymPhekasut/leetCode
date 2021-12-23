
//leave fall on time

// x = size of area 
// a = array [1..x]
//time

//QUESTION: return time when frog can cross
// -1 otherwise 
// Example: 6

//Firstly we count the area that frog could jump (X = 5)

//we create an area, initialize every single element with false boolean

// X + 1 to ignore 0
//        0, 1, 2, 3, 4, 5
// pos = [f, f, f, f, f, f]

//If leaf fall correct position will be TRUE

//x is river area | a is a list of time and position of leaf are failling
function solution(x, a){
    //create new array with the size of river with extra space +1
    //we can put last reverse position
    let riverPosition = new Array(x + 1).fill(false) //no leaves
    
    //where a leaf fall at the particular time
    for(let time = 0; time < a.length; time++) {
        let pos = a[time]
        if(!riverPosition[pos]){
            riverPosition[pos] = true
            x -= 1
            //return time when the last leaf fall
            if( x === 0) return time
        }
    }

    //there ia at least one space where a leaf hasn't fallen
    return -1
}

console.log(solution(5, [1, 3, 1, 4,2, 3, 5, 4]))