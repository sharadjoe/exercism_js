module.exports = class Raindrops {
    
    convert(number){
        var out ="",flag=0
        if ((number%3)=== 0){
            out += "Pling"
        }
        if ((number%5)=== 0) {
            out+="Plang"
        }
        if (number%7 === 0) {
            out+="Plong"
        }
        
        if(out.length>0){
            return out
        }else{
            return number.toString()
        }

    }
}