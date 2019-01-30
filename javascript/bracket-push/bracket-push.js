export const bracketPush = (string) => {
    var divided = string.split(""),
        i=0,count=0,
        goodList=[],
        badList=[]
    while(i<divided.length){
        if ((divided[i] === '{' || divided[i] === '[' || divided[i] === '(') ) {
            goodList.push(divided[i])
            if (goodList.length === divided.length) {
                return false
            }
        }else{
            var oppo = opposite(goodList.pop())
            if(oppo===divided[i]){
                count+=1
            }else{
                return false
            }   
        }
        i+=1
    }
    if(count===divided.length/2){
        return true
    }
}

function opposite(char) {
    if(char==="{"){
        return "}"
    } else if(char==="["){
        return "]"
    }else{
        return ")"
    }
    
}