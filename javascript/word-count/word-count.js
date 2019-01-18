module.exports = class Words {
    count(text){
        this.wordCount = {}
        var splitted = text.match(/\S+/g);
        splitted.forEach((element)=>{
            const wordLower = element.toLowerCase()
            this.wordCount[wordLower] = this.wordCount.hasOwnProperty(wordLower)? this.wordCount[wordLower]+1 : 1
        })
        return this.wordCount
    }
    
}