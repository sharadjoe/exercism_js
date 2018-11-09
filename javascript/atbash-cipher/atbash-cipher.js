const sample = "abcdefghijklmnopqrstuvwxyz"
const reverse = "zyxwvutsrqponmlkjihgfedcba"

export const encode = (string) => {
    var count = 0
    var output = ''
    for(var i=0;i<string.length;i++) {
        var real = parseInt(string[i],10)
        var upper = string[i].toUpperCase()
        if (!isNaN(real)) {
            output += string[i]
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
        if(count%5 === 0 ){
            output += " "
        }
        
    }
    return output
}