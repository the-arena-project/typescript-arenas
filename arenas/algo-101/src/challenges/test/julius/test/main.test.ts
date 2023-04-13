import { add } from '..';

describe('do you understand the rules ?', () => {
    it('Should add two numbers', () => {
        expect(add(4, 5)).toBe(9);
    });
});
