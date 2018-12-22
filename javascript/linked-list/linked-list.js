module.exports = class LinkedList{
    constructor() {
        this.list = [] 
    }
    push(num){
        this.list.push(num)
    }
    pop(){
        return this.list.pop()
    }
    shift(){
        return this.list.shift()
    }
    unshift(num){
        this.list.unshift(num)
    }
    count(){
        return this.list.length
    }
    delete(num){
        var index = this.list.indexOf(num)
        if(index>-1){
            this.list.splice(index, 1)
        }
    }
}