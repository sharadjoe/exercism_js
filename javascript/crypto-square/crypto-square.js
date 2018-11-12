var c=1,r=1
module.exports = class Crypto {
    constructor(string){
        this.string  = string
        var normalised = this.normalizePlaintext()
        this.string = normalised
    }
    normalizePlaintext(){
        this.string = this.string.replace(/[^a-zA-Z0-9]/g, '')
        this.string = this.string.toLowerCase()
        return this.string
    }
    size(){
        while((c*r)<this.string.length){
            if(c>=r && (c-r)<=1){
                r+=1
            } else {
                c+=1
            }
        }
        return r
    }
    plaintextSegments(){
        var segments = []
        var coun = 0,start=0,end =  c+1
        var segParam = Math.floor((this.string.length)/r)
        while(coun<=segParam){
            var slice = this.string.slice(start,end)
            segments.push(slice)
            start+=c    
            end +=start
            coun+=1                                
        }
        return segments
        
    }
    
}