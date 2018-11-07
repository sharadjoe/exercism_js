export const validate = (num) => {
    var str = num.toString()
    var len = str.length
    var sum = 0
    var original = num
    while(num>0){
        var re = num%10
        sum+=Math.pow(re,len)
        num= Math.floor(num/10)
    }
    if(sum==original){
        return true
    } else {
        return false
    }
}