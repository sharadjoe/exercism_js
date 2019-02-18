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
    filter(filterFunc) {
        const filteredValues = []
        for (let i = 0; i < this.values.length; i++) {
            const val = this.values[i]
            if (filterFunc(val)) {
                filteredValues.push(val)
            }
        }
        return new List(filteredValues)
    }

    length() {
        let len = 0
        for (let i = 0; i < this.values.length; i++) {
            len++
        }
        return len
    }

    map(mappingFunc) {
        const mappedArray = []
        for (let i = 0; i < this.values.length; i++) {
            const val = this.values[i]
            const newVal = mappingFunc(val)
            mappedArray.push(newVal)
        }
        return new List(mappedArray)
    }

    foldl(reducerFunc, initialVal) {
        let acc = initialVal
        for (let i = 0; i < this.values.length; i++) {
            acc = reducerFunc(acc, this.values[i])
        }
        return acc
    }

    foldr(reducerFunc, initialVal) {
        let acc = initialVal
        for (let i = 0; i < this.values.length; i++) {
            acc = reducerFunc(acc, this.values[this.values.length - i - 1])
        }
        return acc
    }

    reverse() {
        const reversedList = []
        for (let i = 0; i < this.values.length; i++) {
            reversedList.push(this.values[this.values.length - i - 1])
        }
        return new List(reversedList)
    }
}
