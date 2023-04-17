import { swear } from '..';
import {isValid} from "./const";

describe('Swear', () => {
    describe('The answer is between the lines...', () => {
        it('Is it the right number?', () => {
            const a = swear();
            const youFoundTheRightNumber = isValid(a);
            expect(youFoundTheRightNumber).toBe(true);
        })
    })
})
