import {
    createElement,
    setCSSProperty,
} from '../../web-api/index.js';

import { initBoard } from '../board/index.js';
import initStatusLine from '../status-line/index.js';

export default function puzzle() {
    const el = createElement('div');
    setCSSProperty(el, 'height', '100%');
    el.appendChild(initBoard());
    el.appendChild(initStatusLine());
    return el;
}
