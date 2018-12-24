module.exports = class Diamond{
    makeDiamond(char){
        var row = "",
            j = 1,
            k=0,
            final = [],
            alpha = "ABCDEFGHIJKLMNOPQRSTUVWIYZ",
            index = (alpha.indexOf(char))+1,
            space_count = this.countSpace(index),
            first=0
        //return index
        //TODO:  ONE CHAR AND FIRST LINE FUNCTION
        var mid = Math.floor(space_count / 2)        
        for(var i=0;i<index;i++){
            var count = space_count
            var firstEntry = mid-j, lastEntry = mid+j
            while(count !== 0){
                if(mid === 0){
                    row = row+alpha[k]
                    count-=1
                }
                else if(first===0){
                    if(count === mid){row = row+alpha[k]
                    count-=1
                    first = 1
                    k+=1}else {
                        row = row+ " "
                        count-=1
                    }
                } else if((count === firstEntry || count === lastEntry) && first!==0){
                    row = row+alpha[k]
                    count-=1
                    k+=1
                }else {
                    row= row+ " "
                    count-=1
                }
                j+=1
            }
            if(count === 0){row = row+"\n"}
            final.push(row)
        }
        return final.join('\n')
        
    }

    countSpace(index){
        return (2*index)-1
    }
}


