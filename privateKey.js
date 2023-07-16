import { showTitle, space } from "./utils.js";

export function privateKeyFromBits(bits) {
    const arrayBits = bits.split(' ');
    const arrayDecimal = arrayBits.map(byte => parseInt(byte, 2))
    const arrayHex = arrayBits.map(byte => parseInt(byte, 2).toString(16))

    showTitle('Table of base converted of bits');
    const table = arrayBits.map(byte => {
        return {
            binary: byte,
            decimal: parseInt(byte, 2),
            hex: parseInt(byte, 2).toString(16)
        }
    })
    console.table(table);
    space();

    const privateKey = Buffer.from(arrayDecimal);
    showTitle('Private Key - Hexadecimal');
    console.log(privateKey.toString('hex'));
    space();

    return privateKey;
}
