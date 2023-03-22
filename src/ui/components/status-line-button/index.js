import {
    createElement,
    getClassList,
} from "../../../web-api";

import {
    applyStyles,
    getStylesFor,
} from '../../../theme/index.js';

import { getState } from '../../../state/index.js';

import { ELEMENT_STATUS_LINE_BUTTON } from '../../../theme/consts.js';

export default function statusLineButton(title, onclick) {
    const el = createElement('button');
    getClassList(el).add('status-line-button');
    el.innerHTML = title;
    el.onclick = onclick;
    applyStyles(el, getStylesFor(ELEMENT_STATUS_LINE_BUTTON, getState().theme))
    return el;
}
