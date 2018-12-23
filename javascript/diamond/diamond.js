const final = []

const alpha = "ABCDEFGHIJKLMNOPQRSTUVWIYZ"
module.exports = class Diamond{
    constructor(char) {
        this.char = char
        this.result = this.makeDiamond()
        
    }

    makeDiamond(){
        var row = "",j=1
        const index = (alpha.indexOf(this.char))+2
        const space_count = this.countSpace(index)
        while (j <= space_count) {
            row = row+ " "
            j += 1
        }
        return row
        
    }

    countSpace(index){
        return (2*index)-1
    }
}


