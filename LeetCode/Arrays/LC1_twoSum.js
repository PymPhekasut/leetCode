

function twoSum(arr, target) {

    const numsVisited = {}; //{2 : 0, 7 : 1}
    const res = [];

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        const complement = target - num;

        if (numsVisited[complement] !== undefined) {
            res.push(i);
            res.push(numsVisited[complement]);
        }

        numsVisited[num] = i;
    }

    return res;
}