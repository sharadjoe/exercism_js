export const steps = (limit) => {
    var count = 0
    if (limit<1){
        throw "Only positive numbers are allowed"
    }
    while (limit !== 1){
        if (limit%2 === 0){
            limit = limit/2
            count = count + 1
        } else{
            limit = 3*limit + 1
            count = count + 1
        }
    }
    return count

}