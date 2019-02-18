export const translate  = (string=" ") => {
    var res = []
    if(string===" "){
        return res
    }
    var split_string = splitter(string)
    var len = split_string.length
    return len
    
}

function splitter(string) {
    var chunks = []
    for(var i=0, char_length=string.length;i<char_length;i+=3){
        chunks.push(string.substring(i, i + 3));
    }
    
}