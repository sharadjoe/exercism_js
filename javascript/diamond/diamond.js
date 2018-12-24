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
        var mid = Math.floor(space_count / 2)        
        for(var i=0;i<index;i++){
            var count = space_count
            var firstEntry = mid-j, lastEntry = mid+j
            while(count !== 0){
                
            }
            final.push(row)
        }
        return final.join('\n')
        
    }

    countSpace(index){
        return (2*index)-1
    }
}


