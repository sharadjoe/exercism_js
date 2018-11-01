export const reverseString = (expected) => {
    var splitted = expected.split("");
    var reverse = splitted.reverse(); 
    var actual = reverse.join("")
    return actual
}

