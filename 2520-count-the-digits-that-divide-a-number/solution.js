var countDigits = function(num) {
    let result = 0
    for(let char of [...num.toString()]) {
        if(num % parseInt(char) === 0){
            result++
        }
    }
    return result
};
