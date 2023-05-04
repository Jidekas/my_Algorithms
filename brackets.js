function chkValid(str){
    let result = [] 
    let openers = ["{", "[", "("];

    for(let item of str){
        if(openers.includes(item)){
            result.push(item)
        }
        if(item === ')' && result.pop() !== '('){
            return 'invalid'
        }
        if(item === '}' && result.pop() !== '{'){
            return 'invalid'
        }
        if(item === ']' && result.pop() !== '['){
            return 'invalid'
        }
    }

    if(str.length === 0){
        return 'invalid'
    }
    
    return "valid"   
}

console.log(chkValid("{[()[]]()}()"))

