var firstPalindrome = function(words) {
    // for(const word of words) {
    //     if(word === [...word].reverse().join('')) {
    //         return word
    //     }
    // }
    // return ''

    for(const word of words) {
        let left = 0
        let right = word.length -1

        while(left <= right + 1) {
            if(word[left] !== word[right]) {
                break
            }
            if( left >= right) {
                return word
            }
            left++
            right--
        }
    }
    return ""
};
