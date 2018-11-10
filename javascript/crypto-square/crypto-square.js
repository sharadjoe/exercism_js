module.exports = class Crypto {
    constructor(string){
        this.string  = string
    }
    normalizePlaintext(){
        this.string = this.string.replace(/[^a-zA-Z0-9]/g, '')
        this.string = this.string.toLowerCase()
        return this.string
    }
    
}