
module.exports = class Diamond{
    makeDiamond(char){
        var row = "",
            j = 0,
            final = [],
            alpha = "ABCDEFGHIJKLMNOPQRSTUVWIYZ",
            index = (alpha.indexOf(char))+1,
            space_count = this.countSpace(index),
            first=0,
            k=0,
            firstEntry,lastEntry

        //return index
        //TODO:  ONE CHAR AND FIRST LINE FUNCTION
        var mid = (Math.floor(space_count / 2))+1       
        for(var i=1;i<=index;i++){
            row=""
            firstEntry = mid - j
            lastEntry = mid + j
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
                    if ((count === (firstEntry)) || count === (lastEntry)){
                        row = row+alpha[k]
                        count-=1
                    }
                    else {
                        row = row+" "
                        count-=1
                        if (row.length === space_count) {
                            k += 1
                        }
                    }
                }else {
                    row= row+ " "
                    count-=1
                }
            }
            j+=1
            final.push(row)
        }
        if((i-1)===index){
            var d=[]
            for(j =(index-2);j>=0;j--){
                final.push(final[j])   
            }
            final[final.length - 1] += "\n"
            return final.join("\n")
        }
    }

    countSpace(index){
        return (2*index)-1
    }
}


