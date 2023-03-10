import {
    createElement,
    getClassList,
} from '../../web-api/index.js';

import { goto } from '../../utils/index.js';

import {
    LOCATION_MAIN_MENU,
    LOCATION_RESET_MENU
} from '../../state/consts.js';

const createStatusLineElement = (title, onclick) => {
    const el = createElement('button');
    getClassList(el).add('status-line-element');
    el.innerHTML = title;
    el.onclick = onclick;
    return el;
};

export default function initStatusLine() {
    const el = createElement('div');
    getClassList(el).add('status-line');
    el.appendChild(createStatusLineElement('back', () => goto(LOCATION_MAIN_MENU)));
    el.appendChild(createStatusLineElement('rest', () => goto(LOCATION_RESET_MENU)));
    return el;
}
