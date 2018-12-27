let SecretHandshake = function (number) {
    if (isNaN(number))
        throw new Error('Handshake must be a number');
    this.number = number;
};

SecretHandshake.prototype.commands = function () {
    let commands = [];

    if (this.number & 0b1)
        commands.push('wink');
    if (this.number & 0b10)
        commands.push('double blink');
    if (this.number & 0b100)
        commands.push('close your eyes');
    if (this.number & 0b1000)
        commands.push('jump');
    if (this.number & 0b10000)
        commands.reverse();

    return commands;
};

module.exports = SecretHandshake;