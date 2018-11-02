export const toRna = (sequence) => {
    var splitted = sequence.split("")
    var theNew = splitted.map(get)
    var joined = theNew.join("")
    if (splitted.length !== joined.length){
        throw "Invalid input DNA."
    }
    else {
        return joined
    } 
    
}

function get(value, index, array) {
    if (value === '') {
        return '';
    } else if (value === 'C') {
        return array[index] = 'G'
    } else if (value === 'G') {
        return array[index] = 'C';
    } else if (value === 'T') {
        return array[index] = 'A';
    } else if (value === 'A') {
        return array[index] = 'U';
    } 
}