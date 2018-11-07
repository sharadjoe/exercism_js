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
         var sample = 'abcdefghijklmnopqrstuvwxyz'
         for (var i=0;i<101;i++){
             text+=sample.charAt(Math.floor(Math.random()*sample.length))
         }
         return text
    }
}