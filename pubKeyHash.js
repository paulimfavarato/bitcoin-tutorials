import { createHash } from 'crypto';
import { showTitle, space } from './utils.js';

export function publicKeyHash(hex) {
    const keyBuff = Buffer.from(hex, 'hex');
    const sha = createHash('sha256').update(keyBuff).digest();
    const ripemd = createHash('ripemd160').update(sha).digest();

    showTitle('Hash160 of Public Key');
    console.log(ripemd.toString('hex'));
    space();

    return ripemd; // retorna 20 bytes/160 bits
}
