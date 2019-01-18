exports.parse = function (string) {
    return string
        .replace(/([a-z])([A-Z])/g, "$1 $2") // HyperText -> Hyper Text
        .match(/\b\w/g)
        .join("")
        .toUpperCase();
};