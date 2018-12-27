export const secretHandshake = (decimal) =>{
    var binary = toBinary(decimal)
    var result = calList(binary)
    return binary
    

}

function toBinary(decimal){
    var str="",val
    while(decimal>0){
        val = decimal%2
        str+=val
        decimal = Math.floor(decimal/2)
    }
    str = str.split("")
    str = str.reverse()
    str.join("")
    return str
}

function calList(binary){
    var res = []
    if(Math.floor(binary/1000)){
        res.push('jump')
        binary = binary%1000
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
    return res

}