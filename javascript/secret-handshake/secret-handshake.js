export const secretHandshake = (decimal) =>{
    var binary = toBinary(decimal)
    var res = []
    if (Math.floor(binary / 1000)) {
        res.push('jump')
        binary = binary % 1000
    }
    if (Math.floor(binary / 100)) {
        res.push('close your eyes')
        binary = binary % 100
    }
    if (Math.floor(binary / 10)) {
        res.push('double blink')
        binary = binary % 10
    }
    if (Math.floor(binary / 1)) {
        res.push('wink')
        binary = binary % 1
    }
    return res.reverse()
    

}

function toBinary(decimal){
    var str="",val
    while(decimal>0){
        val = decimal%2
        str+=val
        decimal = Math.floor(decimal/2)
    }
    str = parseInt(str.split("").reverse().join(""))
    return str
}
