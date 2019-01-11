export const classify = (number) => {
    var sum = 0,i=1
    if(number<=0){
        throw "Classification is only possible for natural numbers."
    }else if(number===1){
        return "deficient"
    }else {
        while(i<(number/2)+1){
            if(number%i===0){
                sum+=i
            }
            i+=1
        }
        if(number===sum){
            return "perfect"
        }else if(sum<number){
            return "deficient"
        } else {
            return "abundant"
        }
    }

}