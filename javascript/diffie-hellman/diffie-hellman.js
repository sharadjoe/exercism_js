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
        if(!((privateKey)>1 && (privateKey<this.firstNumber))){
            throw "Error in private key"

        }
    }
    
}