import { expect } from 'chai';

import {
    it,
    describe,
} from 'mocha';

import { getRandomCoordinates } from '../../src/game/index.js';

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
});
