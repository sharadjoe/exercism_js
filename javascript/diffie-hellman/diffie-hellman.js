module.exports = class DiffieHellman{
    constructor (firstNumber, secNumber) {
        this.firstNumber = firstNumber
        this.secNumber = secNumber
        var status = this.validateArguments()
        if(status===1){
            throw "The params are not prime"
        }
    }

    validateArguments(){
        var i=2,j=2,flag=0
        while(i*i<this.firstNumber || j*j<this.secNumber){
            if(this.firstNumber%i===0 || this.secNumber%j===0){
                flag=1
            } 
            return flag
        }
    }

    getPublicKeyFromPrivateKey(privateKey){
        var key = 0
        if((privateKey)>1 && !(privateKey>=this.firstNumber)){
            key = Math.pow(this.secNumber,privateKey)%this.firstNumber
        }else{
            throw "Error in key"
        }
        return key
    }

    getSharedSecret(firstPrivateKey, secondPrivateKey){
        var firstPublicKey = Math.pow(this.secNumber,firstPrivateKey)%this.firstNumber
        var secPublickey = Math.pow(this.secNumber,secondPrivateKey)%this.firstNumber
        var firstSharedSecret = Math.pow(secPublickey,firstPrivateKey)%this.firstNumber
        var secSharedSecret = Math.pow(firstPublicKey, secondPrivateKey) % this.firstNumber

        return firstSharedSecret
    }
    
}