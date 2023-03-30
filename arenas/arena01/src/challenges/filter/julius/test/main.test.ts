import { filter } from '../index'

type FilterTestValues = Array<{
    arr: any[];
    cb: (el: any) => boolean
}>

const compare = (testValues: FilterTestValues) => {
    for (const testValue of testValues) {
        const refFiltered =testValue.arr.filter(testValue.cb);
        const actualFiltered = filter(testValue.arr, testValue.cb);

        expect(actualFiltered).not.toBe(testValue.arr);
        expect(actualFiltered).toEqual(refFiltered);
    }
}

describe('filter', () => {
    it('should filter all elements for which the callback function returns true', () => {
        const testValues: FilterTestValues = [
            {
                arr: [ -1, 2, -4, 7, -123, 2, 3, 7, 0 ],
                cb: (n: number) => n > 0
            },
            {
                arr: ['',  0, false, 1, 2, 3, 'Hello world', [], {}],
                cb: (n: any) => !!n
            }
        ];

        compare(testValues);
    });
})
