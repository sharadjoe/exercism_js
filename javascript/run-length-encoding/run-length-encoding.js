export const encode = (text) =>{
    if(text.length===0){
        return ''
    }else{
        const justcount = text.split("").unique()
        if(justcount.length === text.length){
            return text
        }
    }
}