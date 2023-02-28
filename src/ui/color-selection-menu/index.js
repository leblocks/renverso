import { goto } from '../../utils/index.js';
import { setState } from '../../state/index.js';

import {
    menu,
    menuItem,
    menuTitle,
} from '../utils/index.js';

import { LOCATION_MAIN_MENU } from '../../state/consts.js';

import {
    COLOR_SCHEME_LIGHT,
    COLOR_SCHEME_DARK,
    COLOR_SCHEME_LAZY_EYE,
} from '../../consts.js';

export default function colorSelectionMenu() {
    return menu([
        menuTitle('Select colpor theme'),
        menuItem('Light', () => setState({ colorTheme: COLOR_SCHEME_LIGHT.id })),
        menuItem('Dark', () => setState({ colorTheme: COLOR_SCHEME_DARK.id })),
        menuItem('Lazy eye', () => setState({ colorTheme: COLOR_SCHEME_LAZY_EYE.id })),
        menuItem('Back', () => goto(LOCATION_MAIN_MENU)),
    ]);
}
