//STACK:

//Stack allows you to operate at the top
//place on top push (x) - pointing position on head of those items and push item on the stack

//remove from top (x) = popping
//popping stack - one above of the element/pointer position and 
//reduce the value by 1

//DEPENDS ON SIZE OF ARRAY BUT USE LINK LIST TO GROW ARRAY DYNAMICALLY


//QUEUE:
//2 mains of operation : enqueue and dequeue
//FIFO or first In first Out

// END > ENQUEUE - adding node containing the data item
// HEAD > DEQUEUE - removing the first itme at the head of the liked list


//BRACKET PROBLEM

//To accept a tring and return whether that string is valid or not
//[()()] is valid
//[{()}] is valid
//[(]()] is invalid


//solution(a) a = [({})]()
//return 1 if correctly nested, 0 otherwise

function solution(s){
    let stack = []
    for (const c of s) {
        if(c === '{' || c === '[' || c === '('){
            stack.push(c)
        } else if (c === '}'){
            if(stack.length === 0 || stack.pop() !== '{') return 0
        } else if (c === ']'){
            if(stack.length === 0 || stack.pop() !== '[') return 0
        } else if (c === ')'){
            if(stack.length === 0 || stack.pop() !== '(') return 0
        }
    }

    //there are something in stuck ==fail == 0
    //stack empty and valid == 1
    return stack.length ? 0 : 1
}

console.log(solution("()[]{}()[]{}"))
console.log(solution("([{}])"))
console.log(solution("()]]"))
console.log(solution("([)]"))