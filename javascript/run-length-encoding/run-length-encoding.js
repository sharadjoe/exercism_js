let run = /(\w)\1+/g;
let compressed = /(\d+)(\w)/g;

module.exports = {
    encode: string =>
        string.replace(run, match => match.length + match.charAt(0)),
    decode: encoded =>
        encoded.replace(compressed, (match, length, char) => char.repeat(length)),
};