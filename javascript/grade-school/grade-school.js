function convert(obj){
    return JSON.parse(JSON.stringify(obj))
}
var db
module.exports = class School{
    constructor(){
        db={}
    }
    roster(){
        return convert(db)

    }
}