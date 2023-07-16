import { showTitle, space } from './utils.js';
import EC from 'elliptic';

export function calculateEC(privKey) {
    var ec = new EC.ec('secp256k1'); // gera um curva eliptica
    var key = ec.keyFromPrivate(privKey); // gera par de chaves a partir da chave privada

    showTitle('Public key - Uncompressed');
    const pubPoint = key.getPublic() // ponto na curva após multipicação k = K^G
    const hexPubPoint = pubPoint.encode('hex'); 
    console.log(hexPubPoint); // precisa começar com 04
    space();

    showTitle('Public key - Curve Points');
    const x = pubPoint.getX().toString('hex');
    const y = pubPoint.getY().toString('hex');
    console.table({ x, y })
    space();

    return hexPubPoint; //retorna ponto na curva (hex). chave publica uncompressed
}