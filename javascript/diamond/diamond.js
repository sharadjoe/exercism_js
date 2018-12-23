var final = []

var alpha = "ABCDEFGHIJKLMNOPQRSTUVWIYZ"
module.exports = class Diamond{
    constructor(char) {
        this.char = char
        this.result = this.makeDiamond()
        return this.result
        
    }

    makeDiamond(){
        var row = "", j=1
        const index = (alpha.indexOf(this.char))+2
        const space_count = this.countSpace(index)
        while (j <= space_count) {
            row = row+ " "
            j += 1
        }
        for(var i=0;i<index;i++){
            var mid = Math.floor(space_count/2)
            if(i===0){
                row[i] = alpha[i]
            }
            final.push(row)
        }
        return final.join('\n')
        
    }

    countSpace(index){
        return (2*index)-1
    }
}


