module.exports = class Grains {
    constructor() {
        var i=0
        this.count = []
        while(i<65){
            if(i==1 || i==0 ){
                this.count.push(1)
            }else{
                this.count.push(this.count[i-1]*2)

            }
            i+=1
        }
    }
    square(index) {
        return (this.count[index]).toString()
    }
    
}