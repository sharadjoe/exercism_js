const sample = 'abcdefghijklmnopqrstuvwxyz';
export class Cipher {
    constructor(key) {
        if (typeof key === 'undefined') {
            this.key = this.generateKey();
        } else if (key.length === 0 || key.match(/[^a-z]/, 'g')) {
            throw new Error('Bad key');
        } else {
            this.key = key;
        }
    }
    generateKey(){
         var text= ''
         for (var i=0;i<101;i++){
             text+=sample.charAt(Math.floor(Math.random()*sample.length))
         }
         return text
    }
    encode(message){
        if (this.key.length < message.length){
            this.key *= message.length
        }
        let ext = ''
        for(let i=0;i<message.length;i++){
            let n = sample.indexOf(message[i])
            let m = sample.indexOf(this.key[i])
            if (n + m > 26) {
                var ne = (n + m-26) % 26
            } else {
                var ne = (n + m) % 26
            }
            ext+=sample[ne]
        }
        return ext
    }
    decode(message) {
        let ext = ''
        for (let i = 0; i < message.length; i++) {
            let n = sample.indexOf(message[i])
            let m = sample.indexOf(this.key[i])
            if(n-m>1){
                var ne = (n-m)%26
            } else {
                var ne = (n-m+26)%26
            }
            ext+=sample[ne]
        }
        return ext
    }
}