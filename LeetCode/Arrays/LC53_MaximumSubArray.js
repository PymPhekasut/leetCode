

function maxSubArray(nums) {
    let max = nums[0];

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        nums[i] = Math.max(num, num + nums[i - 1]);
        max = Math.max(num, nums[i]);
    }

    return max;

}