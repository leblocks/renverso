import { JSDOM } from 'jsdom';
import { renderFile } from 'pug';

import { expect, assert } from 'chai';

import {
    it,
    before,
    describe,
} from 'mocha';

import { createElement } from '../../src/web-api/index.js';

import {
    themes,
    applyStyles,
    getStylesFor,
} from '../../src/theme/index.js';

import {
    THEME_DARK,
    THEME_LIGHT,
    THEME_LAZY_EYE,
    ELEMENT_CELL,
    CSS_BACKGROUND_COLOR,
    CSS_OUTLINE,
} from '../../src/theme/consts.js';

describe('theme tests', () => {
    // setup jsdom
    before(() => {
        const { window } = new JSDOM(renderFile('./src/index.pug'));
        global.window = window;
        global.document = window.document;
    });

    it('assert theme structure', () => {
        Object.values(themes)
            .forEach((theme) => {
                Object.values(theme)
                    .forEach((styles) => {
                        styles.forEach((s) => {
                            expect(s).to.be.an.instanceof(Array);
                            expect(s).to.have.length(2);
                        });
                    });
            });
    });

    it('getStyles non existing theme', () => {
        expect(getStylesFor('NON_EXISTING_THEME', ELEMENT_CELL)).to.have.lengthOf(0);
        expect(getStylesFor('NON_EXISTING_THEME', ELEMENT_CELL)).to.be.an.instanceof(Array);
    });

    it('getStyles non existing element', () => {
        expect(getStylesFor(THEME_DARK, 'NON_EXISTING_ELEMENT')).to.have.lengthOf(0);
        expect(getStylesFor(THEME_DARK, 'NON_EXISTING_ELEMENT')).to.be.an.instanceof(Array);
    });

    it('getStyles positive case', () => {
        const styles = getStylesFor(ELEMENT_CELL, THEME_DARK);
        expect(styles).to.be.an.instanceof(Array);
        expect(styles).to.have.length.above(0);
    });

    it('applyStyles on clean element', () => {
        const el = createElement('div');
        assert.isEmpty(el.style[CSS_BACKGROUND_COLOR]);
        applyStyles(el, getStylesFor(ELEMENT_CELL, THEME_DARK));
        assert.isNotEmpty(el.style[CSS_BACKGROUND_COLOR]);
    });

    it('applyStyles cleans previous styles', () => {
        const el = createElement('div');
        assert.isEmpty(el.style[CSS_BACKGROUND_COLOR]);
        applyStyles(el, getStylesFor(ELEMENT_CELL, THEME_LIGHT));
        assert.isNotEmpty(el.style[CSS_BACKGROUND_COLOR]);
        assert.isNotEmpty(el.style[CSS_OUTLINE]);

        // dark theme doesn't have CSS_BORDER style
        applyStyles(el, getStylesFor(ELEMENT_CELL, THEME_LAZY_EYE));
        assert.isNotEmpty(el.style[CSS_BACKGROUND_COLOR]);
        assert.isEmpty(el.style[CSS_OUTLINE]);
    });
});
