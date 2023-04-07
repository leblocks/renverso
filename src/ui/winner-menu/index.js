import {
    setState,
    getState,
} from '../../state/index.js';

import {
    LOCATION_MAIN_MENU,
} from '../../state/consts.js';

import {
    menu,
    menuItem,
    menuTitle,
} from '../components/index.js';

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

export default function winnerMenu() {
    const { moves } = getState();
    return menu([
        menuTitle(`Puzzle solved in ${moves.length} ${conjugateMoves(moves)}!`),
        menuItem('To main menu', gotoMainMenu),
    ]);
}
