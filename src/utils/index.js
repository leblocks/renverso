import {
    COLOR_SCHEME_LIGHT,
    COLOR_SCHEME_DARK,
    COLOR_SCHEME_LAZY_EYE,
} from '../consts.js';

import { setState } from '../state/index.js';

export const goto = (targetLocation) => setState({ location: targetLocation });

// TODO jsdoc for colortheme
export const getCellColor = (cellState, colorTheme) => cellState ? colorTheme.flippedCell : colorTheme.cell;

export const getBoardColor = (colorTheme) => colorTheme.board;

// TODO jsdoc + tests
export const getColorThemeById = (id) => {
    return [COLOR_SCHEME_LIGHT, COLOR_SCHEME_DARK, COLOR_SCHEME_LAZY_EYE]
        .find(t => t.id === id);
};
