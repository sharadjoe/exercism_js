var smallSample = "abcdefghijklmnopqrstuvwxyz"
var bigSample = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var letters = /[^A-Za-z]+$/
module.exports = class RotationalCipher{
    static rotate(string,val){
        var count = 0
        var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        var cipher = ""
        while(count<string.length){
            if(Number(string[count])){
                cipher+=string[count]
            } else if(format.test(string[count])){
                cipher+=string[count]
            }
        }
    }

}