import { expect } from 'chai';

import {
    it,
    describe,
} from 'mocha';

import {
    smallCrossPatternProvider,
    wholeCrossPatternProvider,
    invertedCrossPatternProvider,
} from '../../../src/game/index.js';

describe('flip patterns', () => {
    it('smallCrossPatternProvider 3x3 board for [0,0] cell', () => {
        const pattern = smallCrossPatternProvider(3, 3);
        const coords = pattern(0, 0);
        expect(coords).to.have.deep.members([[0, 0], [1, 0], [0, 1]]);
    });

    it('smallCrossPatternProvider 3x3 board for [1,1] cell', () => {
        const pattern = smallCrossPatternProvider(3, 3);
        const coords = pattern(1, 1);
        expect(coords).to.have.deep.members([[1, 1], [0, 1], [1, 0], [1, 2], [2, 1]]);
    });

    it('smallCrossPatternProvider 3x3 board for [2,2] cell', () => {
        const pattern = smallCrossPatternProvider(3, 3);
        const coords = pattern(2, 2);
        expect(coords).to.have.deep.members([[2, 2], [2, 1], [1, 2]]);
    });

    it('wholeCrossPatternProvider 6x6 board cell count', () => {
        const pattern = wholeCrossPatternProvider(6, 6);
        const coords = pattern(0, 0);
        expect(coords).to.have.lengthOf(11);
    });

    it('wholeCrossPatternProvider 6x6 board for [0,0] cell', () => {
        const pattern = wholeCrossPatternProvider(6, 6);
        const coords = pattern(0, 0);
        // assert row
        expect(coords).to.deep.include.members([[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5]]);
        // assert column
        expect(coords).to.deep.include.members([[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0]]);
    });

    it('wholeCrossPatternProvider 6x6 board for [3,3] cell', () => {
        const pattern = wholeCrossPatternProvider(6, 6);
        const coords = pattern(3, 3);
        // assert row
        expect(coords).to.deep.include.members([[3, 0], [3, 1], [3, 2], [3, 3], [3, 4], [3, 5]]);
        // assert column
        expect(coords).to.deep.include.members([[0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3]]);
    });

    it('invertedCrossPatternProvider 3x3 board for [0,0] cell', () => {
        const pattern = invertedCrossPatternProvider(3, 3);
        const coords = pattern(0, 0);
        expect(coords).to.deep.include.members([[0, 0], [1, 1]]);
    });

    it('invertedCrossPatternProvider 3x3 board for [1,1] cell', () => {
        const pattern = invertedCrossPatternProvider(3, 3);
        const coords = pattern(1, 1);
        expect(coords).to.deep.include.members([[2, 2], [1, 1], [0, 0], [0, 2], [2, 0]]);
    });

    it('invertedCrossPatternProvider 3x3 board for [2,2] cell', () => {
        const pattern = invertedCrossPatternProvider(3, 3);
        const coords = pattern(2, 2);
        expect(coords).to.deep.include.members([[2, 2], [1, 1]]);
    });
});
