export class WordProblem{
    constructor(question) {
        this.question = question
        this.syn = this.syn()
    }
    answer(){
        return this.question
    }
    syn(){
        this.question = this.question.split(" ")
    }
}