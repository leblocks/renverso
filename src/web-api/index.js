// TODO add jsdoc with correct types
export const createElement = (elementName) => document.createElement(elementName);
export const querySelector = (query) => document.querySelector(query);
export const querySelectorAll = (query) => document.querySelectorAll(query);

/**
 * Wrapper for https://developer.mozilla.org/en-US/docs/Web/API/Element/classList.
 * @param {HTMLElement} htmlElement Element to extract its class list.
 */
export const getClassList = (htmlElement) => htmlElement.classList;
