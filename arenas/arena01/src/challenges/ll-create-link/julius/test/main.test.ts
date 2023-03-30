import { createLink } from '../index';

describe('createLink', () => {
    it('should return a new link with a string', () => {
        const link = createLink('hello');
        expect(link).toEqual({
            data: 'hello',
            next: null,
        });
    })
    it('should return a new link containing an array', () => {
        const link = createLink(['hello']);
        expect(link).toEqual({
            data: ['hello'],
            next: null,
        });
    })
    it('should return a new link containing an object', () => {
        const link = createLink({ hello: true });
        expect(link).toEqual({
            data: { hello: true },
            next: null,
        });
    })
});
