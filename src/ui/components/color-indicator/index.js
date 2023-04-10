import { addStateObserver } from '../../../state/index.js';

import {
    getClassList,
    createElement,
} from '../../../web-api/index.js';

export default function colorIndicator(colorExtractor) {
    const canvas = createElement('canvas');
    getClassList(canvas).add('color-indicator');
    // bind to state changes
    // we don't know for sure on which properties it should be updated
    // so will sign it on all updates
    addStateObserver([], (state) => {
        if (canvas) {
            const color = colorExtractor(state);
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = color;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
    });
    return canvas;
}
