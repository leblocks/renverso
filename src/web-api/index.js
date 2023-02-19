// TODO add jsdoc with correct types
/**
 * Wrapper for https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement.
 * @param {string} tagName A string that specifies the type of element to be created.
 * @returns {Element} New element.
 */
export const createElement = (tagName) => document.createElement(tagName);
export const querySelector = (query) => document.querySelector(query);
export const querySelectorAll = (query) => document.querySelectorAll(query);

/**
 * Wrapper for https://developer.mozilla.org/en-US/docs/Web/API/Element/classList.
 * @param {HTMLElement} htmlElement Element to extract its class list.
 * @returns {DOMTokenList} Elements classlist.
 */
export const getClassList = (htmlElement) => htmlElement.classList;
