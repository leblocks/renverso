import { LOCATION_MAIN_MENU } from '../../state/consts.js';
import { goto } from '../../utils/index.js';

import {
    menu,
    menuItem,
    menuTitle,
} from '../utils/index.js';

export default function colorSelectionMenu() {
    return menu([
        menuTitle('Select colpor theme'),
        menuItem('Light', () => goto(LOCATION_MAIN_MENU)),
        menuItem('Dark', () => goto(LOCATION_MAIN_MENU)),
        menuItem('Lazy Eye', () => goto(LOCATION_MAIN_MENU)),
        menuItem('Back', () => goto(LOCATION_MAIN_MENU)),
    ]);
}
