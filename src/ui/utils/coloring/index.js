import {
    COLOR_SCHEME_LIGHT,
    COLOR_SCHEME_DARK,
    COLOR_SCHEME_LAZY_EYE,
} from '../../../consts.js';

// TODO jsdoc for colortheme
export const getCellColor = (cellState, colorTheme) => cellState ? colorTheme.flippedCell : colorTheme.cell;

// TODO jsdoc + tests
export const getColorThemeById = (id) => {
    return [COLOR_SCHEME_LIGHT, COLOR_SCHEME_DARK, COLOR_SCHEME_LAZY_EYE]
        .find(t => t.id === id);
};
