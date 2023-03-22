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
    LEVEL_EASY,
    LEVEL_MEDIUM,
    LEVEL_HARD,
} from '../../../src/game/index.js';

describe('level tests', () => {
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
        const level = getLevel({
            rows,
            columns,
            stepsToSolve: 10,
            pattern: wholeCrossPatternProvider(rows, columns),
        });

        const { pattern, solution } = level;
        let { board } = level;

        for (let i = solution.length - 1; i >= 0; i -= 1) {
            const [row, column] = solution[i];
            board = flipCells(row, column, pattern, board);
        }

        const isSolved = board.every((row) => row.every((cell) => cell));
        assert.isTrue(isSolved);
    });

    it('various level difficulties are solvable', () => {
        [LEVEL_EASY, LEVEL_MEDIUM, LEVEL_HARD]
            .forEach((difficulty) => {
                const level = getLevel({ ...difficulty });
                const { pattern, solution } = level;
                let { board } = level;
                for (let i = solution.length - 1; i >= 0; i -= 1) {
                    const [row, column] = solution[i];
                    board = flipCells(row, column, pattern, board);
                }

                const isSolved = board.every((row) => row.every((cell) => cell));
                assert.isTrue(isSolved);
            });
    });
});
