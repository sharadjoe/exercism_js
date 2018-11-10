const sample = "abcdefghijklmnopqrstuvwxyz"
const reverse = "zyxwvutsrqponmlkjihgfedcba"

export const encode = (string) => {
    string = string.replace(/[^a-zA-Z0-9]/g, '')
    var count = 0
    var output = ''
    for(var i=0;i<string.length;i++) {
        var real = parseInt(string[i],10)
        var upper = string[i].toUpperCase()
        if (Number(string[i])) {
            output += real
            count += 1
        }
        else if (string[i] === " ") {
            count = count
        }
        else if(string[i] === upper) {
            var lower = string[i].toLowerCase()
            var m = sample.indexOf(lower)
            output += reverse[m]
            count+=1
        }
        else {
            var m = sample.indexOf(string[i])
            output += reverse[m]   
            count+=1
        }
        if(count%5 === 0 && i !== string.length-1){
            output += " "
        }
        
    }
    return output
}