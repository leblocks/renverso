import {
    createElement,
    getClassList,
} from '../../../web-api/index.js';

import {
    applyStyles,
    getStylesFor,
} from '../../../theme/index.js';

import {
    getState,
    addStateObserver,
} from '../../../state/index.js';

import { ELEMENT_MENU_TITLE } from '../../../theme/consts.js';

/**
 * Creates disabled html button element that serves as menu title.
 * @param {string} title Title to show.
 */
export default function menuTitle(title) {
    const element = createElement('button');
    element.innerText = title;
    element.disabled = true;
    getClassList(element).add('ui-menu-title');

    // set initial styling on element
    applyStyles(element, getStylesFor(ELEMENT_MENU_TITLE, getState().theme));
    addStateObserver(['theme'], ({ theme }) => {
        applyStyles(element, getStylesFor(ELEMENT_MENU_TITLE, theme));
    }, 'menu-theme-observer');

    return element;
}
