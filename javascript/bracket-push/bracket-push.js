export const bracketPush = (string) => {
    var divided = string.split(""),
        i=0,
        goodList=[],
        badList=[]
    while(i<divided.length+1){
        if(divided[i]==='{' || divided[i]==='['){
            goodList.push(divided[i])
        }   else    {
            badList.push(divided[i])
        }
        i+=1
    }
    goodList.forEach((element) => {
        if(element==="["){
            element = "]"
        }   else    {
            element = "}"
        }
    })
    if(goodList.join("")===badList.join("")){
        return true
    }   else    {
        return false
    }

}