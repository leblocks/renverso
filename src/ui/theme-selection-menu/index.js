import { goto, setTheme } from '../../utils/index.js';

import {
    menu,
    menuItem,
    menuTitle,
} from '../components/index.js';

import {
    LOCATION_MAIN_MENU,
    LOCATION_LAZY_EYE_SETTINGS_MENU,
} from '../../state/consts.js';

import {
    THEME_DARK,
    THEME_LIGHT,
} from '../../theme/consts.js';

export default function themeSelectionMenu() {
    return menu([
        menuTitle('Select color theme'),
        menuItem('Light', () => setTheme(THEME_LIGHT)),
        menuItem('Dark', () => setTheme(THEME_DARK)),
        menuItem('Lazy eye', () => goto(LOCATION_LAZY_EYE_SETTINGS_MENU)),
        menuItem('Back', () => goto(LOCATION_MAIN_MENU)),
    ]);
}
