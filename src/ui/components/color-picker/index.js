import {
    getClassList,
    createElement,
    addEventListener,
} from '../../../web-api/index.js';

import { COLOR_PICKER_PALLETE_SIZE } from '../../../consts.js';

/**
 * Returns rgb color string representation of the color in the palette. E.g: 'rgb(255,0,0)'.
 * @param {number} i Number of the color in the palette.
 * This method is exproted for tesing purposes.
 */
export const getColorForPaletteNumber = (i) => {
    // color changes from rgb(255,0,0) bright red to rgb(0,0,255) bright blue
    // with step defined by the COLOR_PICKER_PALLETE_SIZE
    const colorChangeStep = 255 / (COLOR_PICKER_PALLETE_SIZE / 2);
    if (i < (COLOR_PICKER_PALLETE_SIZE / 2)) {
        // red part
        // first half of the palette we have shades of red from brightest to darkest
        return `rgb(${255 - i * colorChangeStep},0,0)`;
    }
    // blue part
    // second half of the palette we have shades of blue from darkest to brightest
    return `rgb(0,0,${(i - (COLOR_PICKER_PALLETE_SIZE / 2)) * colorChangeStep})`;
};

/**
 * Returns color painted on 'x' coordinate on the canvas.
 * @param {number} x Coordinate of the mouse click, relative to the canvas left border.
 * @param {number} width Width of the canvas.
 * This method is exproted for tesing purposes.
 */
export const getColorAtPoint = (x, width) => {
    const lineWidth = width / (COLOR_PICKER_PALLETE_SIZE + 1);
    let i = 1;
    while (x > lineWidth * i) {
        i += 1;
    }
    return getColorForPaletteNumber(i - 1);
};

/**
 * Creates and cofigures color picker element.
 * @param {callback} colorSetCallback Callback that will called with selected color.
 */
export default function colorPicker(colorSetCallback) {
    const canvas = createElement('canvas');
    getClassList(canvas).add('color-picker');
    const ctx = canvas.getContext('2d');

    // draw color palette on the canvas
    const lineWidth = canvas.width / (COLOR_PICKER_PALLETE_SIZE + 1);
    for (let i = 0; i <= COLOR_PICKER_PALLETE_SIZE; i += 1) {
        ctx.fillStyle = getColorForPaletteNumber(i);
        ctx.fillRect(i * lineWidth, 0, lineWidth, canvas.height);
    }

    // add click handler on the colopicker
    addEventListener(canvas, 'click', ({ clientX }) => {
        if (canvas) {
            // get actual canvas dimensions and coordinates
            const { left, width } = canvas.getBoundingClientRect();
            // make clientX value relative to canvas left corner
            const color = getColorAtPoint(clientX - left, width);
            colorSetCallback(color);
        }
    });
    return canvas;
}
