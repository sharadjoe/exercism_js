
module.exports = class Diamond{
    makeDiamond(char){
        var row = "",
            j = 1,
            final = [],
            alpha = "ABCDEFGHIJKLMNOPQRSTUVWIYZ",
            index = (alpha.indexOf(char))+1,
            space_count = this.countSpace(index),
            first=0,
            k=-1

        //return index
        //TODO:  ONE CHAR AND FIRST LINE FUNCTION
        k+=1
        var mid = (Math.floor(space_count / 2))+1        
        for(var i=0;i<index;i++){
            var count = space_count
            var firstEntry = mid-j, lastEntry = mid+j
            while(count !== 0){
                if(mid === 1){
                    row = row+alpha[k]
                    count-=1
                }
                else if(first===0){
                    if(count === mid){row = row+alpha[k]
                    count-=1
                    k+=1
                    }else if(row.length === count){
                        first = 1
                    }else {
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
            
            final.push(row)
        }
        final[final.length - 1]+="\n"
        return final.join('\n')
        
    }

    countSpace(index){
        return (2*index)-1
    }
}


