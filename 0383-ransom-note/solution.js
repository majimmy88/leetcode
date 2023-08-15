var canConstruct = function(ransomNote, magazine) {
    const magMap = {}
    for(const char of magazine) {
        magMap[char]? magMap[char]++ : magMap[char] = 1
    }

    for(const char of ransomNote) {
        if(magMap[char]){
           magMap[char]-- 
        } else {
            return false
        }
    }
    return true
};
