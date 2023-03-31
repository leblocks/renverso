/**
 * Wrapper for https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement.
 * @param {string} tagName A string that specifies the type of element to be created.
 * @returns {Element} New element.
 */
export const createElement = (tagName) => document.createElement(tagName);

/**
 * Wrapper for https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector.
 * @param {string} query CSS selector query.
 * @returns {Element} The first descendant element of 'document' which
 * matches the specified 'query'.
 */
export const querySelector = (query) => document.querySelector(query);

/**
 * Wrapper for https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll.
 * @param {string} query CSS selector query.
 * @returns {NodeList} A non-live NodeList containing one Element object
 * for each element that matches
 * at least one of the specified selectors or an empty NodeList in case of no matches.
 */
export const querySelectorAll = (query) => document.querySelectorAll(query);

/**
 * Wrapper for https://developer.mozilla.org/en-US/docs/Web/API/Element/classList.
 * @param {HTMLElement} htmlElement Element to extract its class list.
 * @returns {DOMTokenList} Elements classlist.
 */
export const getClassList = (htmlElement) => htmlElement.classList;

/**
 * Wrapper for https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute.
 * @param {Element} element Element to set attribute on it
 * @param {string} name Attribute name.
 * @param {string} value Attribute value.
 */
export const setAttribute = (element, name, value) => element.setAttribute(name, value);

/**
 * Wrapper for https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute
 * @param {Element} element Element to set attribute on it
 * @param {string} name Attribute name.
 * @return {string} Attribute value.
 */
export const getAttribute = (element, name) => element.getAttribute(name);

/**
 * Wrapper for https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener.
 * @param {Element} el Element to set event listener on it.
 * @param {string} event Event name.
 * @param {function} callback A function to invoke in case of 'event'.
 */
export const addEventListener = (el, event, callback) => el.addEventListener(event, callback);

/**
 * Wrapper for https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty.
 * @param {Element} el HTMLElement to set CSS propery onto.
 * @param {string} name CSS property name.
 * @param {string} value CSS property value.
 */
export const setCSSProperty = (el, name, value) => el.style.setProperty(name, value);

/**
 * Wrapper for https://developer.mozilla.org/en-US/docs/Web/API/setTimeout.
 * @param {function} callback A code to execute.
 * @param {number} delay Delay in ms.
 */
export const setTimeout = (callback, delay) => window.setTimeout(callback, delay);
