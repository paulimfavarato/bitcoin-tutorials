import { createHash } from 'crypto';
import { showTitle, space } from './utils.js';

export function publicKeyHash(hex) {
    // hash160 = pub > sha256 > ripemd 
    const keyBuff = Buffer.from(hex, 'hex');
    const sha = createHash('sha256').update(keyBuff).digest(); 
    const hash160 = createHash('ripemd160').update(sha).digest();

    showTitle('Hash160 of Public Key');
    console.log(hash160.toString('hex'));
    space();

    return hash160; // retorna 20 bytes/160 bits
}
