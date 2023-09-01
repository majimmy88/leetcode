function isValid(s: string): boolean {
    const bracketsMap = {
        ")":"(",
        "}":"{",
        "]":"["
    }
    const stack = []
    for(const char of s) {
        if(char === "(" || char == "{" || char === "[") {
            stack.push(char)
            continue
        }
        if(bracketsMap[char] !== stack[stack.length - 1]) {
            return false
        }
        stack.pop()   
    }
    return stack.length === 0
};
