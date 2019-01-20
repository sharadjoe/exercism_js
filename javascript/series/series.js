module.exports = class Series {
    constructor(props) {
        this.number = props
        this.digits = this.digits()
    }
    digits(){
        var digitslist = this.number.split("")
        digitslist = digitslist.map(Number)
        return digitslist
    }
    slices(number){

    }
}