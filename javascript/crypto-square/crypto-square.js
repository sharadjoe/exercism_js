module.exports = class Crypto {
    constructor(string){
        this.string  = string
        var normalised = this.normalizePlaintext()
        this.string = normalised
        this.row = 1
        this.col = 1
        this.siz = this.size()
        this.seg = this.plaintextSegments()
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
        var cipher = [],count=0
        while(this.seg[this.row-1].length!==this.col){
            this.seg[this.row-1]+=" "
        }
        this.seg = this.seg.join("")
        for(var i=0;i<this.col;i++){
            while(count<this.row*this.col){
                cipher+=this.seg[count]
                count+=this.col
            }
            count+=1
        }
        return cipher
    }
  

    
}