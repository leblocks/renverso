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

import { ELEMENT_MENU_ITEM } from '../../../theme/consts.js';

/**
 * Creates menu-item element on top of button HTML element.
 * @param {string} title Menu item title.
 * @param {callback} onClick Onclick event handler.
 */
export default function menuItem(title, onClick) {
    const element = createElement('button');
    element.innerText = title;
    element.onclick = onClick;
    getClassList(element).add('ui-menu-item');

    // set initial styling on element
    applyStyles(element, getStylesFor(ELEMENT_MENU_ITEM, getState().theme));
    addStateObserver(['theme'], ({ theme }) => {
        applyStyles(element, getStylesFor(ELEMENT_MENU_ITEM, theme));
    }, 'menu-item-theme-observer');

    return element;
}
