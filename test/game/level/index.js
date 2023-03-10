import { expect, assert } from 'chai';

import {
    it,
    describe,
} from 'mocha';

import {
    getLevel,
    flipCells,
    getRandomCoordinates,
    wholeCrossPatternProvider,
} from '../../../src/game/index.js';

describe('game logic tests', () => {
    it('getRandomCoordinates 10000 coordinates', () => {
        const coords = getRandomCoordinates(10000, 5, 5);
        expect(coords).to.be.an('array').with.lengthOf(10000);
        coords.forEach((coord) => {
            expect(coord).to.be.an('array').with.lengthOf(2);
            const [row, column] = coord;
            expect(row).to.be.above(-1).and.below(6);
            expect(column).to.be.above(-1).and.below(6);
        });
    });

    it('getLevel produces solvable level', () => {
        const [rows, columns] = [5, 5];
        const {
            board,
            pattern,
            solution,
        } = getLevel(rows, columns, 10, wholeCrossPatternProvider(rows, columns));

        for (let i = solution.length - 1; i >= 0; i -= 1) {
            const [row, column] = solution[i];
            flipCells(row, column, pattern, board);
        }

        const isSolved = board.every((row) => row.every((cell) => cell));
        assert.isTrue(isSolved);
    });
});
