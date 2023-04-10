import {
    goto,
    setTheme,
} from '../../utils/index.js';

import {
    menu,
    menuItem,
    menuTitle,
} from '../components/index.js';

import {
    LOCATION_COLOR_SETTINGS,
    LOCATION_LEFT_EYE_SETTINGS_MENU,
    LOCATION_RIGHT_EYE_SETTINGS_MENU,
} from '../../state/consts.js';

import { THEME_LAZY_EYE } from '../../theme/consts.js';

export default function lazyEyeSettingsMenu() {
    return menu([
        menuTitle('Lazy eye coloring settings'),
        menuItem('Left eye color', () => goto(LOCATION_LEFT_EYE_SETTINGS_MENU)),
        menuItem('Right eye color', () => goto(LOCATION_RIGHT_EYE_SETTINGS_MENU)),
        menuItem('Apply', () => setTheme(THEME_LAZY_EYE)),
        menuItem('Back', () => goto(LOCATION_COLOR_SETTINGS)),
    ]);
}
