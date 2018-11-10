module.exports = class Crypto {
    constructor(string){
        this.string  = string
        var normalised = this.normalizePlaintext()
        this.string = normalised
    }
    normalizePlaintext(){
        this.string = this.string.replace(/[^a-zA-Z0-9]/g, '')
        this.string = this.string.toLowerCase()
        return this.string
    }
    size(){
        var c=1,r=1
        while((c*r)<this.string.length){
            if(c>=r && (c-r)<=1){
                r+=1
            } else {
                c+=1
            }
        }
        return r
    }
    
}