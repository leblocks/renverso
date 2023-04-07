import { JSDOM } from 'jsdom';
import { renderFile } from 'pug';

import {
    it,
    before,
    describe,
} from 'mocha';

import { expect } from 'chai';

import {
    ROW_INDEX_ATTRIBUTE,
    COLUMN_INDEX_ATTRIBUTE,
} from '../../../src/consts.js';

import { router, initBoard } from '../../../src/ui/index.js';
import { getState, setState } from '../../../src/state/index.js';
import { querySelector } from '../../../src/web-api/index.js';

import { WHOLE_CROSS_PATTERN } from '../../../src/game/pattern/const.js';

describe('board tests', () => {
    // setup jsdom
    before(() => {
        const { window } = new JSDOM(renderFile('./src/index.pug'));
        global.window = window;
        global.document = window.document;
    });

    it('cell click flips correct cells', () => {
        setState({
            location: 'GAME_STATE',
            moves: [],
            board: [
                [false, false, false, false],
                [false, false, false, false],
                [false, false, false, false],
                [false, false, false, false],
            ],
            pattern: WHOLE_CROSS_PATTERN,
        });

        router('GAME_STATE', { GAME_STATE: () => initBoard() });

        // click!
        querySelector(`[${ROW_INDEX_ATTRIBUTE}="0"][${COLUMN_INDEX_ATTRIBUTE}="0"]`).click();

        const { board } = getState();

        expect(board).to.deep.eq([
            [true, true, true, true],
            [true, false, false, false],
            [true, false, false, false],
            [true, false, false, false],
        ]);
    });
});
