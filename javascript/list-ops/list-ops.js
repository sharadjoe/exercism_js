export class List{
    constructor(values) {
        this.values = values || []
    }
    append(newList){
        return new List([...this.values,...newList.values])
    }
    
}