import { goto } from '../../utils/index.js';

import {
    setState,
    setStateSilently,
} from '../../state/index.js';

import {
    SMALL_CROSS_PATTERN,
    WHOLE_CROSS_PATTERN,
    INVERTED_CROSS_PATTERN,
} from '../../game/pattern/const.js';

import {
    menu,
    menuItem,
    menuTitle,
    menuSelect,
} from '../components/index.js';

import {
    LOCATION_MAIN_MENU,
    LOCATION_LEVEL_EDITOR,
} from '../../state/consts.js';

const populateBoard = (size) => [...Array(size)].map(() => Array(size).fill(true));

export default function levelEditorMenu() {
    const boardSizes = [
        [4, 'small'],
        [5, 'medium'],
        [7, 'big'],
    ];

    // reset stuff before level editing
    setStateSilently({
        board: populateBoard(boardSizes[0][0]),
        moves: [],
        pattern: WHOLE_CROSS_PATTERN,
    });

    const patterns = [
        INVERTED_CROSS_PATTERN,
        SMALL_CROSS_PATTERN,
        WHOLE_CROSS_PATTERN,
    ].map((p) => [p, p.replace('_', ' ').toLowerCase()]);

    return menu([
        menuTitle('Level editor'),
        menuSelect(boardSizes, (e) => {
            const size = parseInt(e.target.value, 10);
            setState({ board: populateBoard(size) });
        }),
        menuSelect(patterns, (e) => setState({ pattern: e.target.value })),
        menuItem('To editor', () => goto(LOCATION_LEVEL_EDITOR)),
        menuItem('Back', () => goto(LOCATION_MAIN_MENU)),
    ]);
}
