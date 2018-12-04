const count = (string, char) => [...string].filter(character => character === char).length


class NucleotideCounts {
    static parse(dna_strand){
        if(dna_strand.replace(/A|C|G|T/g, '').length){
            throw "Invalid nucleotide in strand"
        } else {
            return `${count(dna_strand, 'A')} ${count(dna_strand, 'C')} ${count(dna_strand, 'G')} ${count(dna_strand, 'T')}`
        }


    }
    
}

export default NucleotideCounts