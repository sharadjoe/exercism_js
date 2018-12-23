const alpha = "ABCDEFGHIJKLMNOPQRSTUVWIYZ"
module.exports = class Diamond{
    constructor(char) {
        this.char = char
        this.result = this.makeDiamond()
        return this.result
    }

    makeDiamond(){
        const index = (alpha.indexOf(this.char))+2
        const space_count = this.countSpace(index)
        
    }

    countSpace(index){
        return (2*index)-1
    }
}


