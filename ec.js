import { showTitle, space } from './utils.js';
import EC from 'elliptic';

export function calculateEC(privKey) {
    var ec = new EC.ec('secp256k1');
    var key = ec.keyFromPrivate(privKey);

    showTitle('Public key - Uncompressed');
    const pubPoint = key.getPublic()
    const hexPubPoint = pubPoint.encode('hex');
    console.log(hexPubPoint);
    space();

    showTitle('Public key - Curve Points');
    const x = pubPoint.getX().toString('hex');
    const y = pubPoint.getY().toString('hex');
    console.table({ x, y })
    space();

    return hexPubPoint;
}