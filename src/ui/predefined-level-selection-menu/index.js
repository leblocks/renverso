import {
    LOCATION_GAME,
    LOCATION_LEVEL_SELECTION_MENU,
} from '../../state/consts.js';

import { ELEMENT_MENU_ITEM } from '../../theme/consts.js';

import { goto } from '../../utils/index.js';

import {
    applyStyles,
    getStylesFor,
} from '../../theme/index.js';

import {
    getClassList,
    createElement,
} from '../../web-api/index.js';

import {
    initPredefinedLevel,
    getPredefinedLevels,
} from '../../game/index.js';

import {
    menu,
    menuItem,
    menuTitle,
} from '../components/index.js';

import {
    getState,
    addStateObserver,
} from '../../state/index.js';

const startGame = (level) => {
    initPredefinedLevel(level);
    goto(LOCATION_GAME);
};

const levelSelector = () => {
    const element = createElement('div');
    getClassList(element).add('ui-level-selector-container');

    // set initial styling on element
    applyStyles(element, getStylesFor(ELEMENT_MENU_ITEM, getState().theme));
    addStateObserver(['theme'], ({ theme }) => {
        applyStyles(element, getStylesFor(ELEMENT_MENU_ITEM, theme));
    }, 'menu-item-theme-observer');

    const { finishedLevelIds } = getState();
    getPredefinedLevels()
        .map((level, i) => {
            const finished = finishedLevelIds.includes(level.id) ? ' (done)' : '';
            const btn = menuItem(`Level ${i + 1}${finished}`, () => startGame(level));
            getClassList(btn).remove('ui-menu-item');
            getClassList(btn).add('ui-level-selector-button');
            return btn;
        })
        .forEach((level) => element.appendChild(level));

    return element;
};

export default function levelSelectionMenu() {
    return menu([
        menuTitle('Levels'),
        levelSelector(),
        menuItem('Back', () => goto(LOCATION_LEVEL_SELECTION_MENU)),
    ]);
}
