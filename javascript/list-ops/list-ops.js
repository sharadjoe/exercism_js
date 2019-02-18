export class List{
    constructor(values) {
        this.values = values || []
    }
    append(newList){
        return new List([...this.values,...newList.values])
    }
    concat(listOfLists){
        let newList = this
        for (let i = 0; i < listOfLists.values.length; i++) {
            newList = newList.append(listOfLists.values[i])
        }
        return newList
    }
    
}