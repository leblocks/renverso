import {
    LOCATION_GAME,
    LOCATION_LEVEL_SELECTION_MENU,
} from '../../state/consts.js';

import { goto } from '../../utils/index.js';

import {
    initPredefinedLevel,
    getPredefinedLevels,
} from '../../game/index.js';

import {
    menu,
    menuItem,
    menuTitle,
} from '../components/index.js';

import { getState } from '../../state/index.js';

const startGame = (level) => {
    initPredefinedLevel(level);
    goto(LOCATION_GAME);
};

export default function levelSelectionMenu() {
    const { finishedLevelIds } = getState();
    const levels = getPredefinedLevels()
        .map((level, i) => {
            const finished = finishedLevelIds.includes(level.id) ? ' (done)' : '';
            return menuItem(`Level ${i + 1}${finished}`, () => startGame(level));
        });

    return menu([
        menuTitle('Levels'),
        ...levels,
        menuItem('Back', () => goto(LOCATION_LEVEL_SELECTION_MENU)),
    ]);
}
