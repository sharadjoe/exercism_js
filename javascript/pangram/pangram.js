const regex = /([a-z])(?!.*\1)/g

export function isPangram(string) {
    string = string.toLowerCase()
    if(string === ''){
        return false
    } else if((string.match(regex)).length === 26){
        return true
    } else {
        return false
    }
    
}