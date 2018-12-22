function convertIntoRows(string) {
    return string.split('\n').map(row => row.split(' ').map(char => parseInt(char, 10)))
}

function convertIntoColumns(rows) {
    const col = []
    rows.forEach((row) => {
        row.forEach((n, index) => {
            col[index] = col[index] || []
            col[index].push(n)
        })
    })
    return col
}

module.exports = class Matrix {
    constructor(string) {
        this.rows = convertIntoRows(string)
        this.columns = convertIntoColumns(this.rows)
    }
}