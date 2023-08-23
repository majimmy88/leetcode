function maximumNumberOfStringPairs(words: string[]): number {
    let count: number = 0
    const set = new Set()
    for(const word of words) {
        if(set.has(word[1] + word[0])) {
            count++
            set.delete(word[1] + word[0])
        } else if(!set.has(word)) {
            set.add(word)
        }
    }

    return count
};
