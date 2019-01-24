export const bracketPush = (string) => {
    var divided = string.split(""),
        i=0,
        goodList=[],
        badList=[]
    while(i<divided.length){
        if (divided[i] === '{' || divided[i] === '[' || divided[i] === '(' ) {
            goodList.push(divided[i])
        }   else     {
            badList.push(divided[i])
        }
        i+=1
    }
    i=0
    while(i<goodList.length){
        if(goodList[i]==="["){
            goodList[i] = "]"
        }if(goodList[i] === "("){
            goodList[i] = ")"
        }if(goodList[i] === "{"){
            goodList[i] = "}"
        }
        i+=1
    }
    return badList.join("")
    if(goodList.join("")===badList.join("")){
        return true
    }   else    {
        return false
    }

}