var findTheDifference = function(s, t) {
    //can't use indexOf or set cause there can be more than one instance of a letter
    //should try to solve in O(n) time
    const sMap = {}
    for(let char of [...s]) {
        !sMap[char] ? sMap[char] = 1: sMap[char]++
    }
    for(let char of [...t]) {
        if(sMap[char]) {
            sMap[char]--
        } else {
            return char
        }
    }
};
