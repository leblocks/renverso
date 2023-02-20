import {
    LOCATION_GAME,
    LOCATION_MAIN_MENU,
} from '../../state/consts.js';

import { goto } from '../../utils/index.js';

import {
    menu,
    menuItem,
    menuTitle,
} from '../utils/index.js';

export default function levelSelectionMenu() {
    return menu([
        menuTitle('Select level'),
        menuItem('Easy', () => goto(LOCATION_GAME)),
        menuItem('Medium', () => goto(LOCATION_MAIN_MENU)),
        menuItem('Hard', () => goto(LOCATION_MAIN_MENU)),
        menuItem('Back', () => goto(LOCATION_MAIN_MENU)),
    ]);
}
