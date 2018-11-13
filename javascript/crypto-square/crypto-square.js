module.exports = class Crypto {
    constructor(string){
        this.string  = string
        var normalised = this.normalizePlaintext()
        this.string = normalised
        this.row = 1
        this.col = 1
        this.siz = this.size()
    }

    normalizePlaintext(){
        this.string = this.string.replace(/[^a-zA-Z0-9]/g, '')
        this.string = this.string.toLowerCase() 
        return this.string
    }

    size(){
        while((this.col*this.row)<this.string.length){
            if(this.col>=this.row && (this.col-this.row)<=1){
                this.row+=1
            } else {
                this.col+=1
            }
        }
        return this.row
    }

    plaintextSegments(){
        var segments = []
        var coun = 0,start=0,end = this.siz
        while(coun < this.col){
            var slice = this.string.slice(start,end)
            segments.push(slice)
            start+= this.siz
            end += this.siz
            coun += 1                                
        }
        return segments
    }


    ciphertext(){
        var cipher = []
        var joined = this.normal.join("")
        return joined
    }
    
}