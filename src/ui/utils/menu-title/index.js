import { createElement, getClassList } from '../../../web-api';
/**
 * Creates disabled html button element that serves as menu title.
 * @param {string} title Title to show.
 */
export default function menuTitle(title) {
    const element = createElement('button');
    element.innerText = title;
    element.disabled = true;
    getClassList(element).add('ui-menu-title');
    return element;
}
