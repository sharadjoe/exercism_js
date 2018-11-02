export const compute = (first, second) => {
    var first_splitted = first.split("")
    var second_splitted = second.split("")
    var hamming_distance = 0
    if (first === '' && second == ''){
        return hamming_distance
    } else if (first_splitted.length !== second_splitted.length){
        throw "left and right strands must be of equal length"
    } else {
        for (var i=0; i<first_splitted.length;i++){
            if (first_splitted[i] !== second_splitted[i]){
                hamming_distance = hamming_distance + 1
            }
        }
    }
    return hamming_distance

}