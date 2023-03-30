import {  map } from "../index";
import { makeList } from "./utils";

describe('map', () => {

    it('should execute the passed callback function on each element of a list (not testing the index parameter)', () => {
        const insertedValues = Array.from({ length: 100 }, (v, idx) => idx + 1 );
        const head = makeList(...insertedValues);
        const mapped = map(head, (link, idx) => link.data * 2);

        expect(mapped).toEqual(insertedValues.map((n) => n * 2));
    });

    it('should execute the passed callback function on each element of a list (testing the index parameter)', () => {
        const insertedValues = Array.from({ length: 100 }, (v, idx) => idx + 1 );
        const head = makeList(...insertedValues);

        const mapped = map(head, (link, idx) => link.data * idx);
        expect(mapped).toEqual(insertedValues.map((n, idx) => n * idx));
    });

    it('should never invoke the callback function if the list is empty', () => {
        const cb = jest.fn((el, idx) => {});

        map(null, cb);

        expect(cb).not.toHaveBeenCalled();
    });
});
