import { findPath } from "../index";

describe('findPath', () => {
    it('single row - easy #1', () => {
        expect(findPath([0,0], [1,0], [[1,1]])).toEqual(2);
    });
    it('single row - easy #2', () => {
        expect(findPath([0,0], [1,0], [[1,1,1,1,1,1,1]])).toEqual(2);
    });
    it('single row - easy #3', () => {
        expect(findPath([0,0], [1,0], [[1,1,0,0,0,0,0]])).toEqual(2);
    });
    it('multiple rows - easy #1', () => {
        expect(findPath([0,0], [1,1], [
            [1,1],
            [0,1],
        ])).toEqual(3);
    });
    it('multiple rows - easy #2', () => {
        expect(findPath([0,0], [1,1], [
            [1,0],
            [1,1],
        ])).toEqual(3);
    });
    it('multiple rows - harder #1', () => {
        expect(findPath([0,0], [1,5], [
            [1,0],
            [1,1],
            [0,1],
            [1,1],
            [1,0],
            [1,1],
        ])).toEqual(9);
    });
    it('multiple rows - harder #2', () => {
        expect(findPath([0,0], [2,0], [
            [1,0,1,1,1,1],
            [1,0,0,0,0,1],
            [1,1,1,0,1,1],
            [0,0,1,0,1,0],
            [0,0,1,1,1,0],
        ])).toEqual(17);
    });
    it('multiple rows - harder #3', () => {
        expect(findPath([0,0], [3,2], [
            [1,0,1,1,1,1],
            [1,0,1,0,0,1],
            [1,0,1,1,0,1],
            [1,0,0,0,0,1],
            [1,1,1,1,1,1],
        ])).toEqual(20);
    });
    it('multiple rows - harder #4', () => {
        expect(findPath([3,2], [0,0], [
            [1,0,1,1,1,1],
            [1,0,1,0,0,1],
            [1,0,1,1,0,1],
            [1,0,0,0,0,1],
            [1,1,1,1,1,1],
        ])).toEqual(20);
    });
});
