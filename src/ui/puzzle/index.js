import {
    createElement,
    setCSSProperty,
} from '../../web-api/index.js';

import {
    initBoard,
    initStatusLine,
} from '../components/index.js';

export default function puzzle() {
    const el = createElement('div');
    setCSSProperty(el, 'height', '100%');
    el.appendChild(initBoard());
    el.appendChild(initStatusLine());
    return el;
}
