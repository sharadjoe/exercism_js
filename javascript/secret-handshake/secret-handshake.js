export const secretHandshake = (decimal) =>{
    var binary = toBinary(decimal)
    return binary

}

function toBinary(decimal){
    var str=[]
    while(decimal===1){
        str.push((decimal%2).toString())
        decimal = Math.floor(decimal/2)
    }
    str = str.reverse()
    str.join("")
    return parseInt(str)
}