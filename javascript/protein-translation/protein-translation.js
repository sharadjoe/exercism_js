export const translate  = (string=" ") => {
    var res = []
    if(string===" "){
        return res
    }
    var split_string = splitter(string)
    var len = split_string.length
    for(i=0;i<len;i+=1){
        if(split_string[i]==="AUG"){
            res.push("Methionine")
        }
        if(split_string[i]==="UUU" || split_string[i]==="UUC"){
            res.push("Phenylalanine")
        }
        if (split_string[i] === "UCU" || split_string[i] === "UCC" || split_string[i] === "UCA" || split_string[i] === "UCG") {
            res.push("Serine")
        }
        if(split_string[i]==="UAU" || split_string[i]==="UAC"){
            res.push("Tyrosine")
        }
        if(split_string[i]==="UGU" || split_string[i]==="UGC"){
            res.push("Cysteine")
        }
        if(split_string[i]==="UGG"){
            res.push("Tryptophan")
        }

    }
    
}

function splitter(string) {
    var chunks = []
    for(var i=0, char_length=string.length;i<char_length;i+=3){
        chunks.push(string.substring(i, i + 3));
    }
    return chunks
}