function splitWordsBySeparator(words: string[], separator: string): string[] {
    const result: string[] = []
    for(const word of words) {
        let currWord = ""
        for(let i = 0; i < word.length; i++) {
            const currChar = word[i]
            if(currChar === separator && currWord.length > 0) {
                result.push(currWord)
                currWord = ""
            }
            if(currChar !== separator) {
                currWord += currChar
            }
        }
        if(currWord.length > 0) {
            result.push(currWord)
        }
    }
    return result
};
