import {
    createElement,
    getClassList,
} from "../../../web-api";

import {
    applyStyles,
    getStylesFor,
} from '../../../theme/index.js';

import { addStateObserver } from '../../../state/index.js';

import { ELEMENT_STATUS_LINE_BUTTON } from '../../../theme/consts.js';

export default function statusLineButton(title, onclick) {
    const el = createElement('button');
    getClassList(el).add('status-line-button');
    el.innerHTML = title;
    el.onclick = onclick;

    // TODO apply styles initially, no need for theme change listener
    addStateObserver(['theme'], ({ theme }) => {
        applyStyles(el, getStylesFor(ELEMENT_STATUS_LINE_BUTTON, theme))
    }, 'status-line-button-theme-observer');


    return el;
}
