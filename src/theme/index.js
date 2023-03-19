import { setCSSProperty } from '../web-api/index.js';

import { 
    CELL_OUTLINE,
    STATUS_LINE_BUTTON_OUTLINE,
} from '../consts.js';

import {
    THEME_DARK,
    THEME_LIGHT,
    THEME_LAZY_EYE,
    ELEMENT_CELL,
    ELEMENT_BOARD,
    ELEMENT_FLIPPED_CELL,
    ELEMENT_MENU,
    ELEMENT_MENU_ITEM,
    ELEMENT_MENU_TITLE,
    ELEMENT_STATUS_LINE_BUTTON,
    CSS_OUTLINE,
    CSS_OUTLINE_OFFSET,
    CSS_BACKGROUND_COLOR,
    CSS_COLOR,
    CSS_BORDER_BOTTOM,
} from './consts.js';

// exported for tests to validate its structure
export const themes = {
    [THEME_LIGHT]: {
        [ELEMENT_MENU]: [
            [CSS_BACKGROUND_COLOR, 'white'],
        ],
        [ELEMENT_MENU_TITLE]: [
            [CSS_COLOR, 'black'],
            [CSS_BORDER_BOTTOM, '1vh solid black'],
        ],
        [ELEMENT_MENU_ITEM]: [
            [CSS_COLOR, 'black'],
            [CSS_OUTLINE, `${CELL_OUTLINE} solid black`],
            [CSS_OUTLINE_OFFSET, `-${CELL_OUTLINE}`],
        ],
        [ELEMENT_CELL]: [
            [CSS_BACKGROUND_COLOR, 'white'],
            [CSS_OUTLINE, `${CELL_OUTLINE} solid black`],
            [CSS_OUTLINE_OFFSET, `-${CELL_OUTLINE}`],
        ],
        [ELEMENT_FLIPPED_CELL]: [
            [CSS_BACKGROUND_COLOR, 'black'],
        ],
        [ELEMENT_BOARD]: [
            [CSS_BACKGROUND_COLOR, 'white'],
        ],
        [ELEMENT_STATUS_LINE_BUTTON]: [
            [CSS_OUTLINE, `${STATUS_LINE_BUTTON_OUTLINE} solid black`],
            [CSS_OUTLINE_OFFSET, `-${STATUS_LINE_BUTTON_OUTLINE}`],
        ],
    },

    [THEME_DARK]: {
        [ELEMENT_MENU]: [
            [CSS_BACKGROUND_COLOR, 'black'],
        ],
        [ELEMENT_MENU_TITLE]: [
            [CSS_COLOR, 'white'],
            [CSS_BORDER_BOTTOM, '1vh solid white'],
        ],
        [ELEMENT_MENU_ITEM]: [
            [CSS_COLOR, 'white'],
            [CSS_OUTLINE, `${CELL_OUTLINE} solid white`],
            [CSS_OUTLINE_OFFSET, `-${CELL_OUTLINE}`],
        ],
        [ELEMENT_CELL]: [
            [CSS_BACKGROUND_COLOR, 'black'],
            [CSS_OUTLINE, `${CELL_OUTLINE} solid white`],
            [CSS_OUTLINE_OFFSET, `-${CELL_OUTLINE}`],
        ],
        [ELEMENT_FLIPPED_CELL]: [
            [CSS_BACKGROUND_COLOR, 'white'],
        ],
        [ELEMENT_BOARD]: [
            [CSS_BACKGROUND_COLOR, 'black'],
        ],
        [ELEMENT_STATUS_LINE_BUTTON]: [
            [CSS_OUTLINE, `${STATUS_LINE_BUTTON_OUTLINE} solid white`],
            [CSS_OUTLINE_OFFSET, `-${STATUS_LINE_BUTTON_OUTLINE}`],
        ],
    },

    [THEME_LAZY_EYE]: {
        [ELEMENT_MENU]: [
            [CSS_BACKGROUND_COLOR, 'black'],
        ],
        [ELEMENT_MENU_TITLE]: [
            [CSS_COLOR, 'red'],
            [CSS_BORDER_BOTTOM, '1vh solid blue'],
        ],
        [ELEMENT_MENU_ITEM]: [
            [CSS_COLOR, 'red'],
            [CSS_OUTLINE, `${STATUS_LINE_BUTTON_OUTLINE} solid blue`],
            [CSS_OUTLINE_OFFSET, `-${STATUS_LINE_BUTTON_OUTLINE}`],
        ],
        [ELEMENT_CELL]: [
            [CSS_BACKGROUND_COLOR, 'red'],
        ],
        [ELEMENT_FLIPPED_CELL]: [
            [CSS_BACKGROUND_COLOR, 'blue'],
        ],
        [ELEMENT_BOARD]: [
            [CSS_BACKGROUND_COLOR, 'black'],
        ],
        [ELEMENT_STATUS_LINE_BUTTON]: [
            [CSS_OUTLINE, `${STATUS_LINE_BUTTON_OUTLINE} solid red`],
            [CSS_OUTLINE_OFFSET, `-${STATUS_LINE_BUTTON_OUTLINE}`],
        ],
    },
};

/**
 * @typedef {string[]} ElementStyle
 * Array (a pair) of CSS property name and its value.
 */

/**
 * Gets list of 'ElementStyle' defined in 'theme' for a 'element'.
 * @param {string} element Name of the element to get styles for.
 * @param {string} theme Name of the theme to lookup styles from.
 * @return {ElementStyle[]} List of styles.
 */
export const getStylesFor = (element, theme) => (themes[theme] ? (themes[theme][element] ? themes[theme][element] : []) : []);

/**
 * Applies theme defined styles on the element.
 * @param {HTMLElement} element Element to be styled.
 * @param {ElementStyle[]} styles Styles to apply.
 */
export const applyStyles = (element, styles) => {
    // remove all possible styles that were set
    // by different themes
    Object.values(themes)
        // iterate over themes
        .forEach((theme) => {
            Object.values(theme)
                // iterate over components in theme and reset styles
                .forEach((style) => style.forEach(([property, _]) => element.style[property] = ''));
        });

    styles.forEach(([property, value]) => {
        setCSSProperty(element, property, value);
    });
};
