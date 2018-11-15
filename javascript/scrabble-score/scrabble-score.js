function score(string){
    var count = 0, score = 0
    while(count<string.length){
        var real = string[count].toLowerCase()
        if (real === 'a' || real === 'e' || real === 'i' || real === 'o' || real === 'u' || real === 'l' || real === 'n' || real === 'r' || real === 's' || real === 't'){
            score+=1
            count+=1
        }
        else if (real === 'd' || real === 'g'){
            score+=2
            count+=1
        }
        else if (real === 'b' || real === 'c'|| real === 'm' || real === 'p') {
            score += 3
            count+=1
        }
        else if (real === 'f' || real === 'v' || real === 'h' || real === 'w' || real === 'y') {
            score += 4
            count+=1
        }
        else if (real === 'k') {
            score += 5
            count+=1
        }
        else if (real === 'j' || real === 'x') {
            score += 8
            count+=1
        }
        else {
            score+=10
            count+=1
        }
    }
    return score
}

export default score