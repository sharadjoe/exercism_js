class List {
    constructor(list=[]){
        this.list = list
    }

    compare(other){
        return{
            '-1': isSublist(other.list, this.list) ?
                'SUBLIST' :
                'UNEQUAL',
            '0': isSublist(other.list, this.list) ?
                'EQUAL' :
                'UNEQUAL',
            '1': isSublist(this.list, other.list) ?
                'SUPERLIST' :
                'UNEQUAL'
            
        }[lengthDiff(this,other)]
    }
}


function lengthDiff(p,q) {
    return String(Math.sign(p.list.length - q.list.length))
}

function isSublist(p,q){
    return p.join().match(q.join())

}


export default List