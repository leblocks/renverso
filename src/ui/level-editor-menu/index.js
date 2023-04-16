import { goto } from '../../utils/index.js';

import {
    menu,
    menuItem,
    menuTitle,
    menuSelect,
} from '../components/index.js';

import {
    LOCATION_MAIN_MENU,
} from '../../state/consts.js';

export default function levelEditorMenu() {
    const boardSizes = [
        [4, 'small'],
        [7, 'medium'],
        [11, 'big'],
    ];

    return menu([
        menuTitle('Level editor'),
        menuSelect(boardSizes, e => console.log(e)),  
        menuItem('Back', () => goto(LOCATION_MAIN_MENU)),
    ]);
}
