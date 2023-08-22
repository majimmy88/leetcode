function splitWordsBySeparator(words: string[], separator: string): string[] {
    const result: string[] = []
    for(const word of words) {
        let currWord = ""
        for(const char of word) {
            if(char === separator && currWord.length > 0) {
                result.push(currWord)
                currWord = ""
            }
            if(char !== separator) {
                currWord += char
            }
        }
        if(currWord.length > 0) {
            result.push(currWord)
        }
    }
    return result
};
