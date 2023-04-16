import {
    createElement,
    getClassList,
    addEventListener,
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
 * Creates menu-select element on top of select HTML element.
 * @param {string[][]} options Pairs of options values and texts
 * @param {callback} onSelectChange Callback that will be invoked on selector changes.
 */
export default function menuSelect(options, onSelectChange) {
    const element = createElement('select');
    addEventListener(element, 'change', onSelectChange);
    // populate choices
    for (let i = 0; i < options.length; i += 1) {
        const [value, text] = options[i];
        const option = createElement('option');
        option.value = value;
        option.text = text;
        getClassList(option).add('ui-menu-select-option');
        element.appendChild(option);
    }

    getClassList(element).add('ui-menu-item');
    // set initial styling on element
    applyStyles(element, getStylesFor(ELEMENT_MENU_ITEM, getState().theme));
    addStateObserver(['theme'], ({ theme }) => {
        applyStyles(element, getStylesFor(ELEMENT_MENU_ITEM, theme));
    }, 'menu-item-theme-observer');

    return element;
};
