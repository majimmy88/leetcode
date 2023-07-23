var balancedStringSplit = function(s) {
    const arr = [...s]
    let balanced = 0
    let count = 0
    for(const char of arr) {
        char === "L" ? balanced+=1 : balanced-=1
        balanced === 0 ? count+=1 : count
    }
    return count
};
