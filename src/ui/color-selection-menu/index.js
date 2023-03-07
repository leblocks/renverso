import { goto, setTheme } from '../../utils/index.js';

import {
    menu,
    menuItem,
    menuTitle,
} from '../utils/index.js';

import { LOCATION_MAIN_MENU } from '../../state/consts.js';

import {
    THEME_DARK,
    THEME_LIGHT,
    THEME_LAZY_EYE,
} from '../../theme/consts.js';

export default function colorSelectionMenu() {
    return menu([
        menuTitle('Select colpor theme'),
        menuItem('Light', () => setTheme(THEME_LIGHT)),
        menuItem('Dark', () => setTheme(THEME_DARK)),
        menuItem('Lazy eye', () => setTheme(THEME_LAZY_EYE)),
        menuItem('Back', () => goto(LOCATION_MAIN_MENU)),
    ]);
}
