export class Squares {
    constructor(limit){
        this.limit = limit
        this.squareOfSum = this.squareOfSum(this.limit)
        this.sumOfSquares = this.sumOfSquares(this.limit)
    }
    squareOfSum(limit){
        return Math.pow(limit*(limit+1)/2,2)
    }
    sumOfSquares(limit){
        return limit*(limit+1)*(2*limit+1)/6
    }
}

