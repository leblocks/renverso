import {
    LOCATION_GAME,
    LOCATION_MAIN_MENU,
} from '../../state/consts.js';

import {
    LEVEL_EASY,
    LEVEL_MEDIUM,
    LEVEL_HARD,
    initLevel,
} from '../../game/index.js';

import { goto } from '../../utils/index.js';

import {
    menu,
    menuItem,
    menuTitle,
} from '../components/index.js';

const startGame = (difficulty) => {
    initLevel(difficulty);
    goto(LOCATION_GAME);
};

export default function levelSelectionMenu() {
    return menu([
        menuTitle('Select level'),
        menuItem('Easy', () => startGame(LEVEL_EASY)),
        menuItem('Medium', () => startGame(LEVEL_MEDIUM)),
        menuItem('Hard', () => startGame(LEVEL_HARD)),
        menuItem('Back', () => goto(LOCATION_MAIN_MENU)),
    ]);
}
