import { menu, menuItem, menuTitle } from '../utils/index.js';
import { goto } from '../../utils/index.js';

import {
    LOCATION_MAIN_MENU,
    LOCATION_LEVEL_SELECTION_MENU,
} from '../../state/consts.js';

export default function createMainMenu() {
    const mainMenu = menu();
    mainMenu.appendChild(menuTitle('Renverso'));
    mainMenu.appendChild(menuItem('New game', () => goto(LOCATION_LEVEL_SELECTION_MENU)));
    return mainMenu;
}
