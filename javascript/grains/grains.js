import bigInt from './lib/big-integer';

export default () => ({
    square: (n) => bigInt(2).pow(n - 1).toString(),
    total: () => bigInt(2).pow(64).minus(1).toString()
})