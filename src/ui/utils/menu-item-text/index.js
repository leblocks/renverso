import { createElement, getClassList } from '../../../web-api/index.js';
/**
 * Creates disabled html button element that serves as menu text entry
 * @param {string} text Text to show.
 */
export default function menuItemText(text) {
    const element = createElement('button');
    element.innerText = text;
    element.disabled = true;
    getClassList(element).add('ui-menu-item-text');
    return element;
}
