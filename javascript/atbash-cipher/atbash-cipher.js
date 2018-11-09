const sample = "abcdefghijklmnopqrstuvwxyz"
const reverse = "zyxwvutsrqponmlkjihgfedcba"

export const encode = (string) => {
    var count = 0
    var output = ''
    for(var i=0;i<string.length;i++) {
        var upper = string[i].toUpperCase()
        if(string[i] === upper) {
            var lower = string[i].toLowerCase()
            var m = sample.indexOf(lower)
            output += reverse[m]
        }
        if(string[i]=== " "){
            count+=1
        } else {
            var m = sample.indexOf(string[i])
            output += reverse[m]   
        }
    }
    return output
}