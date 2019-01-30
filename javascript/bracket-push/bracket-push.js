export const bracketPush = (string) => {
    var divided = string.split(""),
        i=0,count=0,
        goodList=[],
        badList=[]
    while(i<divided.length){
        if ((divided[i] === '{' || divided[i] === '[' || divided[i] === '(') ) {
            goodList.push(divided[i])
        }else  if(goodList.length!==divided.length){
            var oppo = opposite(goodList.pop()) || ""
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