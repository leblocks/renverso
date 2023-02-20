import { menu, menuItem, menuTitle } from '../utils/index.js';
import { goto } from '../../utils/index.js';

import {
    LOCATION_LEVEL_SELECTION_MENU,
    LOCATION_COLOR_SETTINGS,
} from '../../state/consts.js';

export default function mainMenu() {
    const mainMenu = menu();
    mainMenu.appendChild(menuTitle('Renverso'));
    mainMenu.appendChild(menuItem('New game', () => goto(LOCATION_LEVEL_SELECTION_MENU)));
    mainMenu.appendChild(menuItem('Color theme', () => goto(LOCATION_COLOR_SETTINGS)));
    return mainMenu;
}
