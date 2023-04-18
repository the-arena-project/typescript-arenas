import { Cipher } from 'crypto';

export class MessageRouterCipher {
    private readonly DECIMAL_PRINTABLE_ASCII_RANGE = [32, 126];
    private readonly PRINTABLE_CHAR_COUNT =
        this.DECIMAL_PRINTABLE_ASCII_RANGE[1] - this.DECIMAL_PRINTABLE_ASCII_RANGE[0] + 1;

    private normalizeShift(shift: number): number {
        const normalizedShift = shift % this.PRINTABLE_CHAR_COUNT;

        return normalizedShift;
    }

    encrypt(message: string, _shift: number): string {
        const shift = this.normalizeShift(_shift);
        let encryptedMessage = '';

        for (let i = 0; i < message.length; i++) {
            const char = message[i];
            const charCode = char.charCodeAt(0);

            let newCharCode = charCode + shift;

            if (newCharCode > this.DECIMAL_PRINTABLE_ASCII_RANGE[1]) {
                const gap = newCharCode - this.DECIMAL_PRINTABLE_ASCII_RANGE[1];

                newCharCode = this.DECIMAL_PRINTABLE_ASCII_RANGE[0] + gap - 1;
            }
            if (newCharCode < this.DECIMAL_PRINTABLE_ASCII_RANGE[0]) {
                const gap = this.DECIMAL_PRINTABLE_ASCII_RANGE[0] - newCharCode;

                newCharCode = this.DECIMAL_PRINTABLE_ASCII_RANGE[1] - gap + 1;
            }

            encryptedMessage += String.fromCharCode(newCharCode);
        }

        return encryptedMessage;
    }

    decrypt(message: string, _shift: number) {
        const shift = this.normalizeShift(_shift);

        return this.encrypt(message, -shift);
    }
}

const c = new MessageRouterCipher().encrypt(process.argv[2], +process.argv[3]);
const dc = new MessageRouterCipher().decrypt(c, +process.argv[3]);

console.log(c);
console.log(dc);
