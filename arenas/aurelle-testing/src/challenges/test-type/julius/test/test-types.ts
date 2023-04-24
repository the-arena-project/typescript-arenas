import { Test } from 'ts-toolbelt';
import { Book as ActualBook } from '..';

export interface RefBook {
    title: string;
    authorName: string;
}

const { checks, check } = Test;

checks([check<ActualBook, RefBook, Test.Pass>()]);
