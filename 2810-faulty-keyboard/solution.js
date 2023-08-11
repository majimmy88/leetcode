var finalString = function(s) {
    let result = []
    let iCount = 0
    for(const char of s) {
        if(char === "i") {
            iCount++
        } else {
            result.push(char)
        }
    }
    iCount % 2 === 0 ? result : result.reverse()


    return result.join('')
};
