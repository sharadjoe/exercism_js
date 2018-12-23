
var alpha = "ABCDEFGHIJKLMNOPQRSTUVWIYZ"
module.exports = class Diamond{
    constructor(char) {
        this.char = char
        this.result = this.makeDiamond()
        return this.result
        
    }

    makeDiamond(){
        var row = "", j=1,final=[]
        const index = (alpha.indexOf(this.char))+2
        const space_count = this.countSpace(index)
        var count = space_count
        for(var i=0;i<index;i++){
            var mid = Math.floor(space_count/2)
            while(count !== 0){
                row = row+alpha[i]+'\n'
                count-=1
            }
            final.push(row)
        }
        return final.join('\n')
        
    }

    countSpace(index){
        return (2*index)-1
    }
}


