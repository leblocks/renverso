import { expect } from 'chai';

import {
    it,
    describe,
} from 'mocha';

import {
    makeMove,
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
});
