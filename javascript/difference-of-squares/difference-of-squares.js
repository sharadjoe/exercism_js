export class Squares {
    constructor(limit){
        this.limit = limit
        this.squareOfSum = this.squareOfSum(this.limit)
    }
    squareOfSum(limit){
        return Math.pow(limit*(limit+1)/2,2)

    }
}

