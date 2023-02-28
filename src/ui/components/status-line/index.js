import { createElement, getClassList } from '../../../web-api/index.js';

export default function statusLine() {
    const sl = createElement('div');
    getClassList(sl).add('status-line');
    return sl;
}
