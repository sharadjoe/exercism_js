const regex = /([a-z])(?!.*\1)/g
export function isIsogram(string){
    string = string.replace(/-| /g, "")
    string = string.toLowerCase()
    if(string === ''){
        return true
    } else if (string.match(regex).length === string.length){
            return true
    }
    else {
        return false
    }

}