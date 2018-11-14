var smallSample = "abcdefghijklmnopqrstuvwxyz"
var bigSample = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var letters = /[^A-Za-z]+$/
module.exports = class RotationalCipher{
    static rotate(string,val){
        var count = 0,index,finalindex,real
        var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?" "]+/;
        var cipher = ""
        while(count<string.length){
            if(Number(string[count])){
                cipher+=string[count]
                count+=1
            } else if(format.test(string[count])){
                cipher+=string[count]
                count+=1
            } else {
                real = string[count].toUpperCase()
                if(real === string[count]){
                    index = bigSample.indexOf(string[count])
                    finalindex = (index + val) % 26
                    cipher += bigSample[finalindex]
                } else {
                    index = smallSample.indexOf(string[count])
                    finalindex = (index + val) % 26
                    cipher += smallSample[finalindex]
                }
                count += 1

            }
        }
        return cipher
    }

}