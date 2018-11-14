module.exports = class DiffieHellman{
    constructor (p, g) {
        this.p = p
        this.g = g
        var status = this.validateArguments()
        if(status===1){
            throw "The params are not prime"
        }
    }

    validateArguments(){
        var i=2,j=2,flag=0
        while(i*i<this.p || j*j<this.g){
            if(this.p%i===0 || this.g%j===0){
                flag=1
            } 
            return flag
        }
    }

    getPublicKeyFromPrivateKey(privateKey){
        var key = 0
        if((privateKey)>1 && !(privateKey>=this.p)){
            key = Math.pow(this.g,privateKey)%this.p
        }else{
            throw "Error in key"
        }
        return key
    }

    getSharedSecret(someoneprivateKey, alicePublicKey){
        return (alicePublicKey ** someoneprivateKey )%this.p

       
    }
    
}