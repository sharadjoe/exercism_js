module.exports = class Traingle {
    constructor(first, second, third) {
        this.first = first
        this.second = second
        this.third = third
    }
    kind(){
        if (this.first <= 0 || this.second <= 0 || this.third <= 0){
            throw "Wont Work"
        }
        if (this.first + this.second < this.third || this.third + this.second < this.first || this.first + this.third < this.second){
            throw "Wont Work"
        }

        if (this.first === this.second && this.second === this.third){
            return 'equilateral'
        }
        else if (this.first === this.second || this.second === this.third || this.first === this.third) {
            return 'isosceles'
        }
        else {
            return 'scalene'
        }
            
    }  
}