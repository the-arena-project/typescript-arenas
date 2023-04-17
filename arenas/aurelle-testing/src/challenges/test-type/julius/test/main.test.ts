import { Test } from 'ts-toolbelt';
import { Book as ActualBook } from '..';

export interface RefBook {
    title: string;
    authorName: string;
}

const { checks, check } = Test;

describe('test-type', () => {
    it('should be the expected book type', () => {
        checks([check<ActualBook, RefBook, Test.Pass>()]);
    });
});
