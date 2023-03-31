import { createElement, getClassList } from '../../../web-api/index.js';

import {
    applyStyles,
    getStylesFor,
} from '../../../theme/index.js';

import {
    getState,
    addStateObserver,
} from '../../../state/index.js';

import { ELEMENT_MENU } from '../../../theme/consts.js';

/**
 * Creates new menu.
 * @param {HTMLElement[]} [children] Menu items that will be appended to the component.
 */
export default function menu(children) {
    const element = createElement('div');
    getClassList(element).add('ui-menu');

    if (children) {
        children.forEach((child) => element.appendChild(child));
    }

    // set initial styling on element
    applyStyles(element, getStylesFor(ELEMENT_MENU, getState().theme));
    addStateObserver(['theme'], ({ theme }) => {
        applyStyles(element, getStylesFor(ELEMENT_MENU, theme));
    }, 'menu-theme-observer');

    return element;
}
