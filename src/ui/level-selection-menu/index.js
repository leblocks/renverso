import {
    LOCATION_MAIN_MENU,
    LOCATION_RANDOM_LEVEL_SELECTION_MENU,
    LOCATION_PREDEFINED_LEVEL_SELECTION_MENU,
} from '../../state/consts.js';

import { goto } from '../../utils/index.js';

import {
    menu,
    menuItem,
    menuTitle,
} from '../components/index.js';

export default function levelSelectionMenu() {
    return menu([
        menuTitle('Select level'),
        menuItem('Pick level', () => goto(LOCATION_PREDEFINED_LEVEL_SELECTION_MENU)),
        menuItem('Random level', () => goto(LOCATION_RANDOM_LEVEL_SELECTION_MENU)),
        menuItem('Back', () => goto(LOCATION_MAIN_MENU)),
    ]);
}
