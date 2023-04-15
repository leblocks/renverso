import {
    setState,
    getState,
} from '../../state/index.js';

import { goto } from '../../utils/index.js';

import {
    menu,
    menuItem,
    menuTitle,
} from '../components/index.js';

import {
    getPredefinedLevels,
    initPredefinedLevel,
    getNextUncompleteLevel,
} from '../../game/index.js';

import {
    LOCATION_GAME,
    LOCATION_MAIN_MENU,
} from '../../state/consts.js';

const gotoMainMenu = () => {
    setState({
        board: [],
        moves: [],
        solution: [],
        pattern: null,
        location: LOCATION_MAIN_MENU,
    });
};

const conjugateMoves = (moves) => `move${moves.length > 1 ? 's' : ''}`;

const startNextLevel = () => {
    const { currentLevelId, finishedLevelIds } = getState();
    const nextLevel = getNextUncompleteLevel(
        currentLevelId,
        finishedLevelIds,
        getPredefinedLevels(),
    );

    if (nextLevel !== null) {
        initPredefinedLevel(nextLevel);
        goto(LOCATION_GAME);
    }
};

export default function winnerMenu() {
    const { moves, currentLevelId, finishedLevelIds } = getState();

    const nextLevel = getNextUncompleteLevel(
        currentLevelId,
        finishedLevelIds,
        getPredefinedLevels(),
    );

    const menuItems = [
        menuTitle(`Puzzle solved in ${moves.length} ${conjugateMoves(moves)}!`),
        menuItem('To main menu', gotoMainMenu),
    ];

    if (nextLevel !== null) {
        menuItems.splice(1, 0, menuItem('Next level', startNextLevel));
    }

    return menu(menuItems);
}
