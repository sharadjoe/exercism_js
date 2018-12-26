
module.exports = class Diamond{
    makeDiamond(char){
        var row = "",
            j = 1,
            final = [],
            alpha = "ABCDEFGHIJKLMNOPQRSTUVWIYZ",
            index = (alpha.indexOf(char))+1,
            space_count = this.countSpace(index),
            first=0,
            k=0,iter=[]

        //return index
        //TODO:  ONE CHAR AND FIRST LINE FUNCTION
        var mid = (Math.floor(space_count / 2))+1       
        var firstEntry = mid - j, lastEntry = mid + j 
        for(var i=0;i<index;i++){
            row=""
            var count = space_count
            while(count !== 0){
                if(mid === 1){
                    row = row+alpha[k]
                    count-=1
                }
                else if(first===0){
                    if(count === mid){row = row+alpha[k]
                    count-=1
                    k+=1
                    }else {
                        row = row+ " "
                        count-=1
                        if(row.length === space_count){
                            first = 1
                        }
                    }
                } else if(first!==0){
                    if ((count === firstEntry) || count === lastEntry){
                        row = row+alpha[k]
                        count-=1
                    }else {
                        row = row+" "
                        count-=1
                    }
                
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


