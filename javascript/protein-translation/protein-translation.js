export const translate  = (string=" ") => {
    var res = []
    if(string===" "){
        return res
    }
    var split_string = splitter(string)
    var len = split_string.length
    for(var i=0;i<len;i+=1){
        if(split_string[i]==="AUG"){
            res.push("Methionine")
        }
        else if(split_string[i]==="UUU" || split_string[i]==="UUC"){
            res.push("Phenylalanine")
        }
        else if (split_string[i] === "UCU" || split_string[i] === "UCC" || split_string[i] === "UCA" || split_string[i] === "UCG") {
            res.push("Serine")
        }
        else if(split_string[i]==="UAU" || split_string[i]==="UAC"){
            res.push("Tyrosine")
        }
        else if(split_string[i]==="UGU" || split_string[i]==="UGC"){
            res.push("Cysteine")
        }
        else if(split_string[i]==="UGG"){
            res.push("Tryptophan")
        }
        else if (split_string[i] === "UAA" || split_string[i] === "UAG" || split_string[i] === "UGA") {
            //res.push("STOP")
            if(res[0]==="STOP"){
                return []
            }else{
                return res
            }
        }
        else if(split_string[i]==="UUA" || split_string[i]==="UUG"){
            res.push("Leucine")
        }
        else{
            throw "Invalid codon"
        }
    }
    return res
    
}

function splitter(string) {
    var chunks = []
    for(var i=0, char_length=string.length;i<char_length;i+=3){
        chunks.push(string.substring(i, i + 3));
    }
    return chunks
}