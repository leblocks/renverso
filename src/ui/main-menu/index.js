import {
    menu,
    menuItem,
    menuTitle,
} from '../components/index.js';

import { goto } from '../../utils/index.js';

import continueButton from '../continue-button/index.js';

import {
    LOCATION_LEVEL_SELECTION_MENU,
    LOCATION_LEVEL_EDITOR_MENU,
    LOCATION_COLOR_SETTINGS,
} from '../../state/consts.js';

export default function mainMenu() {
    const m = menu();
    m.appendChild(menuTitle('Renverso'));
    m.appendChild(menuItem('New game', () => goto(LOCATION_LEVEL_SELECTION_MENU)));

    if (process.env.NODE_ENV !== 'production') {
        m.appendChild(menuItem('Level editor', () => goto(LOCATION_LEVEL_EDITOR_MENU)));
    }

    m.appendChild(continueButton());
    m.appendChild(menuItem('Color theme', () => goto(LOCATION_COLOR_SETTINGS)));
    return m;
}
