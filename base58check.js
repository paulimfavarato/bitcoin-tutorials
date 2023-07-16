import { createHash } from "crypto";
import bs58 from "bs58";

export const VERSION = {
    BTC_ADDR: 0x00,
    PSH: 0x05,
    TESTNET_ADDR: 0x6F,
    PRIVATE_WIF: 0x80
};

export function base58check(payload, version) {

    // base58check dividido em 3 partes
    // [versao: 1 byte][payload (hash160): 20 bytes][checksum: 4 bytes]
    // encoda tudo em base58

    version = Buffer.from([version]);

    // calcula o checksun: version+payload > sha256 > sha256 > 4 primeiros bytes
    const hash = Buffer.concat([version, payload]); // Join version and payload
    const sha1 = createHash('sha256').update(hash).digest(); // 1st sha256
    const sha2 = createHash('sha256').update(sha1).digest()  // 2nd sha256  
    const checkSum = sha2.subarray(0, 4); // get 4 first bytes = checkSum

    const hashCheck = Buffer.concat([hash, checkSum]); // join everything
    const addr = bs58.encode(hashCheck);
    return addr;
}
