const transpose = (rows) => {
    if (rows.length === 0) { return []; }

    const numberOfEntries = Math.max(...rows.map(str => str.length));
    const lengthOfEntries = rows.length;

    const transposed = [...Array(numberOfEntries)
        .fill([...Array(lengthOfEntries)])]

    return transposed
        .map((a, row) => {
            return a.map((_, col) => rows[col][row] || ' ').join('')
        })
};

export { transpose };