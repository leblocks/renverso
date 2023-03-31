import {
    createElement,
    getClassList,
} from '../../web-api/index.js';

import { goto } from '../../utils/index.js';

import { statusLineButton } from '../components/index.js';

import { undoMove } from '../../game/index.js';

import {
    setState,
    getState,
} from '../../state/index.js';

import {
    LOCATION_MAIN_MENU,
    LOCATION_RESET_MENU,
} from '../../state/consts.js';

const undo = () => {
    const state = getState();
    setState({ ...undoMove(state) });
};

export default function initStatusLine() {
    const el = createElement('div');
    getClassList(el).add('status-line');
    el.appendChild(statusLineButton('back', () => goto(LOCATION_MAIN_MENU)));
    el.appendChild(statusLineButton('undo', undo));
    el.appendChild(statusLineButton('reset', () => goto(LOCATION_RESET_MENU)));
    return el;
}
