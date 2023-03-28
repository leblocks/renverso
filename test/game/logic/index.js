import { expect, assert } from 'chai';

import {
    it,
    describe,
} from 'mocha';

import {
    makeMove,
    undoMove,
    getLevel,
    resetBoard,
    isBoardSolved,
    smallCrossPatternProvider,
} from '../../../src/game/index.js';

describe('game logic tests', () => {
    it('makeMove adds correct coords to the state', () => {
        const board = [
            [false, false, false],
            [false, false, false],
            [false, false, false],
        ];

        const moves = [[1, 2]];

        const moveResult = makeMove(
            1,
            1,
            { board, moves, pattern: smallCrossPatternProvider(3, 3) },
        );

        expect(moveResult.moves).to.be.an('array').and.to.deep.eq([[1, 2], [1, 1]]);
        expect(moveResult.board).to.deep.eq([
            [false, true, false],
            [true, true, true],
            [false, true, false],
        ]);
    });

    it('undoMove do nothing on empty moves', () => {
        const board = [
            [false, false, false],
            [false, false, false],
            [false, false, false],
        ];

        const moves = [];

        const moveResult = undoMove({ board, moves, pattern: smallCrossPatternProvider(3, 3) });

        expect(moveResult.moves).to.be.an('array').and.to.deep.eq([]);
        expect(moveResult.board).to.deep.eq([
            [false, false, false],
            [false, false, false],
            [false, false, false],
        ]);
    });

    it('undoMove correctly undo move', () => {
        const board = [
            [false, true, false],
            [true, true, true],
            [false, true, false],
        ];

        const moves = [[1, 1]];

        const moveResult = undoMove({ board, moves, pattern: smallCrossPatternProvider(3, 3) });

        expect(moveResult.moves).to.be.an('array').and.to.deep.eq([]);
        expect(moveResult.board).to.deep.eq([
            [false, false, false],
            [false, false, false],
            [false, false, false],
        ]);
    });

    it('resetBoard correctly resets board with 0 moves', () => {
        const board = [
            [false, true, false],
            [true, true, true],
            [false, true, false],
        ];

        const moves = [];

        const reset = resetBoard({ board, moves, pattern: smallCrossPatternProvider(3, 3) });
        expect(reset.moves).to.be.an('array').and.to.deep.eq([]);
        expect(reset.board).to.deep.eq([
            [false, true, false],
            [true, true, true],
            [false, true, false],
        ]);
    });

    it('resetBoard correctly resets board', () => {
        const { board, solution, pattern } = getLevel({
            rows: 3,
            columns: 3,
            stepsToSolve: 10,
            pattern: smallCrossPatternProvider(3, 3),
        });

        const reset = resetBoard({ board, moves: solution, pattern });

        expect(reset.moves).to.be.an('array').and.to.deep.eq([]);
        expect(reset.board).to.deep.eq([
            [true, true, true],
            [true, true, true],
            [true, true, true],
        ]);
    });

    it('isBoardSolved for solved board', () => {
        const board = [
            [true, true, true],
            [true, true, true],
            [true, true, true],
        ];

        assert.isTrue(isBoardSolved(board));
    });

    it('isBoardSolved for non-solved board', () => {
        const board = [
            [true, true, true],
            [true, true, false],
            [true, true, true],
        ];

        assert.isFalse(isBoardSolved(board));
    });
});
