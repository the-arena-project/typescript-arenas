import { MessageRouterCipher } from '..';

describe('MessageRouterCipher', () => {
    let cipher: MessageRouterCipher;

    beforeEach(() => {
        cipher = new MessageRouterCipher();
    });

    describe('should encrypt a message with a given shift', () => {
        it('encrypt a message with a shift of 0 (should not change the message)', () => {
            const message = 'Hello World!';
            const shift = 0;
            const encryptedMessage = cipher.encrypt(message, shift);

            expect(encryptedMessage).toBe(message);
        });

        it('encrypt a message with a shift of 1', () => {
            const message = 'Hello World!';
            const shift = 1;
            const encryptedMessage = cipher.encrypt(message, shift);
            const expectedEncryptedMessage = 'Ifmmp!Xpsme"';

            expect(encryptedMessage).toBe(expectedEncryptedMessage);
        });

        it('encrypt a message with a shift of 2', () => {
            const message = 'Hello World!';
            const shift = 2;
            const encryptedMessage = cipher.encrypt(message, shift);
            const expectedEncryptedMessage = 'Jgnnq"Yqtnf#';

            expect(encryptedMessage).toBe(expectedEncryptedMessage);
        });

        it('encrypt a message with a shift of 3', () => {
            const message = 'Hello World!';
            const shift = 3;
            const encryptedMessage = cipher.encrypt(message, shift);
            const expectedEncryptedMessage = 'Khoor#Zruog$';

            expect(encryptedMessage).toBe(expectedEncryptedMessage);
        });

        it('encrypt a message with a shift of 5', () => {
            const message = 'Hello World!';
            const shift = 5;
            const encryptedMessage = cipher.encrypt(message, shift);
            const expectedEncryptedMessage = 'Mjqqt%\\twqi&';

            expect(encryptedMessage).toBe(expectedEncryptedMessage);
        });

        it('encrypt a message with a shift of 10', () => {
            const message = 'Hello World!';
            const shift = 10;
            const encryptedMessage = cipher.encrypt(message, shift);
            const expectedEncryptedMessage = 'Rovvy*ay|vn+';

            expect(encryptedMessage).toBe(expectedEncryptedMessage);
        });

        it('encrypt a message with a shift of 15', () => {
            const message = 'Hello World!';
            const shift = 15;
            const encryptedMessage = cipher.encrypt(message, shift);
            const expectedEncryptedMessage = 'Wt{{~/f~"{s0';

            expect(encryptedMessage).toBe(expectedEncryptedMessage);
        });

        it('encrypt a message with a shift of 32', () => {
            const message = 'Hello World!';
            const shift = 32;
            const encryptedMessage = cipher.encrypt(message, shift);
            const expectedEncryptedMessage = 'h&--0@w03-%A';

            expect(encryptedMessage).toBe(expectedEncryptedMessage);
        });

        it('encrypt a message with a shift of 64', () => {
            const message = 'Hello World!';
            const shift = 64;
            const encryptedMessage = cipher.encrypt(message, shift);
            const expectedEncryptedMessage = ')FMMP`8PSMEa';

            expect(encryptedMessage).toBe(expectedEncryptedMessage);
        });

        it('encrypt a message with a shift of -5', () => {
            const message = 'Hello World!';
            const shift = -5;
            const encryptedMessage = cipher.encrypt(message, shift);
            const expectedEncryptedMessage = 'C`ggjzRjmg_{';

            expect(encryptedMessage).toBe(expectedEncryptedMessage);
        });

        it('encrypt a message with a shift of -10', () => {
            const message = 'Hello World!';
            const shift = -10;
            const encryptedMessage = cipher.encrypt(message, shift);
            const expectedEncryptedMessage = '>[bbeuMehbZv';

            expect(encryptedMessage).toBe(expectedEncryptedMessage);
        });

        it('encrypt a message with a shift of -15', () => {
            const message = 'Hello World!';
            const shift = -15;
            const encryptedMessage = cipher.encrypt(message, shift);
            const expectedEncryptedMessage = '9V]]`pH`c]Uq';

            expect(encryptedMessage).toBe(expectedEncryptedMessage);
        });

        it('encrypt a message with a shift of -32', () => {
            const message = 'Hello World!';
            const shift = -32;
            const encryptedMessage = cipher.encrypt(message, shift);
            const expectedEncryptedMessage = '(ELLO_7ORLD`';

            expect(encryptedMessage).toBe(expectedEncryptedMessage);
        });

        it('encrypt a message with a shift of -64', () => {
            const message = 'Hello World!';
            const shift = -64;
            const encryptedMessage = cipher.encrypt(message, shift);
            const expectedEncryptedMessage = 'g%,,/?v/2,$@';

            expect(encryptedMessage).toBe(expectedEncryptedMessage);
        });
    });

    describe("should wrap around the ASCII's table printable characters", () => {
        it('last printable character should wrap around to the first printable character', () => {
            const message = '~';
            const shift = 1;
            const encryptedMessage = cipher.encrypt(message, shift);
            const expectedEncryptedMessage = ' ';

            expect(encryptedMessage).toBe(expectedEncryptedMessage);
        });

        it('positive shift of n should be reversed by a negative shift of n', () => {
            const message = 'Hello World!';
            const shift = 10;
            const encryptedMessage = cipher.encrypt(message, shift);
            const decryptedMessage = cipher.encrypt(encryptedMessage, -shift);

            expect(decryptedMessage).toBe(message);
        });

        it('should get the same message if shifting by the number of printable characters (126 - 32 + 1 = 95)', () => {
            const message = 'Hello, World!';
            const shift = 126 - 32 + 1;
            const encryptedMessage = cipher.encrypt(message, shift);

            expect(encryptedMessage).toBe(message);
        });

        it('should get the same message if shifting by any multiple of 95 (see test above)', () => {
            const message = 'Hello, World!';

            for (let i = 0; i !== 10; ++i) {
                const shift = 95 * i;
                const encryptedMessage = cipher.encrypt(message, shift);

                expect(encryptedMessage).toBe(message);
            }
        });
    });
});
