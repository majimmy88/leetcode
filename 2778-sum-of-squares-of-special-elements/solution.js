var sumOfSquares = function(nums) {
    let sum = 0
    const n = nums.length
    for(let i = 1; i*i <= n; i++) {
        if(n % i === 0) {
            sum += nums[i-1]**2
            const compliment = n/i
            if(compliment !== i) {
                sum += nums[compliment-1]**2
            }
        }
    } 
    return sum
};
