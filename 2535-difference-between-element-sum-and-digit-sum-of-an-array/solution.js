var differenceOfSum = function(nums) {
    let result = 0
    for(const num of nums) {
        result += num
        for(const digit of digits(num)) {
            result -= digit
        }
    }    
    return Math.abs(result)
};
function* digits(num) {
    while (num > 0) {
        const digit = num % 10;
        yield digit;
        num = Math.floor(num / 10);
    }
}
