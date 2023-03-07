import { menu, menuItem, menuTitle } from '../components/index.js';
import { goto } from '../../utils/index.js';

import {
    LOCATION_LEVEL_SELECTION_MENU,
    LOCATION_COLOR_SETTINGS,
} from '../../state/consts.js';

export default function mainMenu() {
    const m = menu();
    m.appendChild(menuTitle('Renverso'));
    m.appendChild(menuItem('New game', () => goto(LOCATION_LEVEL_SELECTION_MENU)));
    m.appendChild(menuItem('Color theme', () => goto(LOCATION_COLOR_SETTINGS)));
    return m;
}
