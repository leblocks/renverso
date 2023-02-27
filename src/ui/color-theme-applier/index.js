import { addStateObserver } from '../../state/index.js';
import { querySelectorAll } from '../../web-api/index.js';

import {
    COLOR_SCHEME_LIGHT,
    COLOR_SCHEME_DARK,
    COLOR_SCHEME_LAZY_EYE,
    ROW_INDEX_ATTRIBUTE,
    COLUMN_INDEX_ATTRIBUTE,
} from '../../consts.js';


const themes = [COLOR_SCHEME_LIGHT, COLOR_SCHEME_DARK, COLOR_SCHEME_LAZY_EYE];

// handle color theme changes
addStateObserver(['colorTheme'], ({ colorTheme, board }) => {
    // select all cells and assign colors according to its state the state
    querySelectorAll('.cell')
        .forEach(cell => {
            // get cell state from board
            // apply colors

            // TODO finish
        });

    // select board and apply color
});
