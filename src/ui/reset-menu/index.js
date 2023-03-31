import {
    LOCATION_GAME,
} from '../../state/consts.js';

import { goto } from '../../utils/index.js';

import {
    menu,
    menuItem,
    menuTitle,
} from '../components/index.js';

import {
    resetBoard,
} from '../../game/logic/index.js';

import {
    getState,
    setState,
} from '../../state/index.js';

const reset = () => {
    const state = getState();
    // reset board
    setState({ ...resetBoard(state) });
    // go back to game
    goto(LOCATION_GAME);
};

export default function resetMenu() {
    return menu([
        menuTitle('Do you want to reset level progress?'),
        menuItem('Yes', () => reset()),
        menuItem('No', () => goto(LOCATION_GAME)),
    ]);
}
