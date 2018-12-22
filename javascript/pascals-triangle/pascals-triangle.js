class Triangle {
    constructor (size) {
        this.rows = [[1]]
        for(let y=1;y<size;y+=1){
            this.lastRow = []
            for(let x=0;x<=y;x+=1){
                const up = this.rows[y-1]
                const left = up[x-1]||0
                const right = up[x]||0
                this.lastRow.push(left+right)
            }
            this.rows.push(this.lastRow)
        }
    }
    
}


export default Triangle