function maximumNumberOfStringPairs(words: string[]): number {
    let count: number = 0
    const set = new Set()
    for(const word of words) {
        const reversePair = word[1] + word[0]
        if(set.has(reversePair)) {
            count++
            set.delete(reversePair)
        } else if(!set.has(word)) {
            set.add(word)
        }
    }
    return count
};
