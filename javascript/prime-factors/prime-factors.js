export const primeFactors = (num) => {
    var list = []
    if(num===2){
        list.push(2)
        num = num/2
    }
    for(var i=2;i<=num;i+=1){
        while(num%i === 0){
            list.push(i)
            num = num / i
        }
    }
    return list
}