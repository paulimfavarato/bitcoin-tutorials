
import { VERSION, base58check } from './base58check.js';
import { calculateEC } from './ec.js';
import { privateKeyFromBits } from './privateKey.js';
import { publicKeyHash } from './pubKeyHash.js';
import { showTitle } from './utils.js';

// Simula lançamento de uma moeda (0 ou 1) multiplas vezes. 
function generateBits(n = 256) {
    let bits = '';
    for (let i = 1; i <= n; i++) {
        bits += Math.round(Math.random())
        if (i < n && i % 8 == 0) {
            bits += ' ';
        }
    }

    showTitle('Binary Code (divided chunks of 8 bits = 1 byte)');
    console.log(bits + '\n');

    return bits;
}

// Você também pode utilizar a função interna da lib crypto
// const random = randomBytes(32);

const bits = generateBits();
const privateKey = privateKeyFromBits(bits);
const publicKey = calculateEC(privateKey);
const pubKeyHash = publicKeyHash(publicKey)
const address = base58check(pubKeyHash, VERSION.BTC_ADDR);

showTitle('Bitcoin Address - Uncompressed');
console.log(address)




