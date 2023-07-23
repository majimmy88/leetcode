var defangIPaddr = function(address) {
    // let result = ''
    // for(let i = 0; i < address.length; i++) {
    //     if(address[i] === ".") {
    //         result += "[.]"
    //     } else {
    //         result += address[i]
    //     }
    // }
    // return result
    return [...address].reduce((acc,cur) => acc += cur === "." ? "[.]" : cur )
};
