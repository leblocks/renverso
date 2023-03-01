import {
    createElement,
    getClassList,
    querySelector,
    setCSSProperty,
} from '../../../web-api/index.js';


const createStatusLineElement = (title) => {
    const el = createElement('button');
    getClassList(el).add('status-line-element');
    el.innerHTML = title;
    return el;
};

export const initStatusLine = () => {
    const el = createElement('div');
    getClassList(el).add('status-line');

    el.appendChild(createStatusLineElement('meow1'));
    el.appendChild(createStatusLineElement('meow1'));
    el.appendChild(createStatusLineElement('meow1'));
    el.appendChild(createStatusLineElement('meow1'));
    el.appendChild(createStatusLineElement('meow1'));
    el.appendChild(createStatusLineElement('meow1'));
    return el;
}

/**
 * Callback for window.onresize, to keep cell status line size correct.
 */
export const resizeStatusLine = () => {
    // TODO calculate vh from board height
    const board = querySelector('.board');
    // setCSSProperty(querySelector('.status-line'), 'height', 
};
