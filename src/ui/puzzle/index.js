import {
    createElement,
} from '../../web-api/index.js';

import {
    initBoard,
    initStatusLine,
} from '../components/index.js';

export default function puzzle() {
    const el = createElement('div');
    el.appendChild(initBoard());
    el.appendChild(initStatusLine());
    return el;
}
