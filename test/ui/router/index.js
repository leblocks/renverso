import { JSDOM } from 'jsdom';
import { renderFile } from 'pug';

import {
    it,
    before,
    describe,
} from 'mocha';

import { expect } from 'chai';

import { createElement, querySelector } from '../../../src/web-api/index.js';
import { router } from '../../../src/ui/index.js';
import { setState } from '../../../src/state/index.js';

describe('router tests', () => {
    // setup jsdom
    before(() => {
        const { window } = new JSDOM(renderFile('./src/index.pug'));
        global.window = window;
        global.document = window.document;
    });

    it('router correctly renders inital state', () => {
        const element1 = createElement('div');
        element1.innerHTML = '<a>dummy1</a>';

        router('DUMMY_STATE_1', {
            DUMMY_STATE_1: element1,
        });

        expect(querySelector('div > div > a').innerHTML).to.equal('dummy1');
    });

    it('router correctly renders state changes', () => {
        const element1 = createElement('div');
        element1.innerHTML = '<a>dummy1</a>';

        const element2 = createElement('div');
        element2.innerHTML = '<a>dummy2</a>';

        router('DUMMY_STATE_1', {
            DUMMY_STATE_1: element1,
            DUMMY_STATE_2: element2,
        });

        setState({ location: 'DUMMY_STATE_2' });

        expect(querySelector('div > div > a').innerHTML).to.equal('dummy2');
    });

    it('router correctly renders lazy component', () => {
        const element1 = createElement('div');
        element1.innerHTML = '<a>dummy1</a>';

        const element2 = createElement('div');
        element2.innerHTML = '<a>dummy2</a>';

        router('DUMMY_STATE_1', {
            DUMMY_STATE_1: element1,
            DUMMY_STATE_2: () => element2,
        });

        setState({ location: 'DUMMY_STATE_2' });

        expect(querySelector('div > div > a').innerHTML).to.equal('dummy2');
    });
});
