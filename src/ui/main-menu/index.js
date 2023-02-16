import { menu, menuItem, menuTitle } from '../utils/index.js';
import { goto } from '../../utils/index.js';

import {
    LOCATION_MAIN_MENU,
} from '../../state/consts.js';

export default function createMainMenu() {
    const mainMenu = menu();
    mainMenu.appendChild(menuTitle('Renverso'));
    mainMenu.appendChild(menuItem('test', () => goto(LOCATION_MAIN_MENU)));
    return mainMenu;
}
