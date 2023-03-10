import {
    LOCATION_GAME,
} from '../../state/consts.js';

import { goto } from '../../utils/index.js';

import {
    menu,
    menuItem,
    menuTitle,
} from '../components/index.js';

export default function resetMenu() {
    return menu([
        menuTitle('Do you want to reset level progress?'),
        // TODO implement reset here
        menuItem('Yes', () => goto(LOCATION_GAME)),
        menuItem('No', () => goto(LOCATION_GAME)),
    ]);
}
