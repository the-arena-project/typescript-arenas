import * as crypto from "crypto";

const getValidNumber = (): number => {
    const keyHex = '8bdbe26b0ef511e81a94b64aac726b5a02d5222010f29badb07701ee604247f1';
    const ivHex = 'bb09060eb5cc61202ee1ff4f97eca57b';
    const encrypted = 'e23d1c7eb4135cd0f6a56094bdaf8cf6';

    let iv = Buffer.from(ivHex, 'hex');
    let key = Buffer.from(keyHex, 'hex');
    let encryptedText = Buffer.from(encrypted, 'hex');
    let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return parseInt(decrypted.toString());
}

export const isValid = (num: number) => {
    const valid = getValidNumber();
    return num === valid;
}
