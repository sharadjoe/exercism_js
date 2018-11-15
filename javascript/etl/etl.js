function transform(input){
    const out ={}
    Object.keys(input).forEach((key) => {
        const items = input[key] || []

        items.forEach((items) => {
            const val = items.toLowerCase()
            out[val] = Number(key)
        })
     
    })
    return out
}

export default transform