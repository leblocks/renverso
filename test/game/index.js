// import { expect } from 'chai';

import {
    it,
    describe,
} from 'mocha';

import { getRandomCoordinates } from '../../src/game/index.js';

describe('game logic tests', () => {
    it('getRandomCoordinates does not produce duplicates', () => {
        console.log(getRandomCoordinates(2, 1, 1));
    });
});
