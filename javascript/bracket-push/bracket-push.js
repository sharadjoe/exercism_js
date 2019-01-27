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
}