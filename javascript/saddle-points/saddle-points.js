class Matrix {
    constructor(mtx) {
        this.rows = mtx.split('\n').map(line => line.trim().split(' ').map(v => +v))
        this.columns = this.rows[0].map((_, col) => this.rows.map(row => row[col]))

        // cell >= every row ele && <= every col ele
        this.saddlePoints = []
        for (let r = 0; r < this.rows.length; r++) {
            for (let c = 0; c < this.rows[0].length; c++) {
                const cell = this.rows[r][c]
                if (cell === Math.max(...this.rows[r]) &&
                    cell === Math.min(...this.columns[c])) {
                    this.saddlePoints.push([r, c])
                }
            }
        }
    }
}

export default Matrix