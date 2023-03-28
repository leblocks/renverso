import { goto } from '../../utils/index.js';

import { getState } from '../../state/index.js';

import {
    LOCATION_MAIN_MENU,
} from '../../state/consts.js';

import {
    menu,
    menuItem,
    menuTitle,
} from '../components/index.js';

export default function winnerMenu() {
    const { solution, moves } = getState();
    return menu([
        menuTitle($`Puzzle solved in ${moves.length} moves!`),
        menuItem('Share puzzle!', () => goto(LOCATION_MAIN_MENU)),
        menuItem(`Show generated solution (${solution.length} moves)`, () => goto(LOCATION_MAIN_MENU)),
        menuItem('Back to main menu', () => goto(LOCATION_MAIN_MENU)),
    ]);
}
