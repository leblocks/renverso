import {
    router,
    mainMenu,
    levelSelectionMenu,
} from './ui';

import {
    LOCATION_MAIN_MENU,
    LOCATION_LEVEL_SELECTION_MENU,
} from './state/consts.js';

window.onload = () => {
    router(LOCATION_MAIN_MENU, {
        [LOCATION_MAIN_MENU]: mainMenu(),
        [LOCATION_LEVEL_SELECTION_MENU]: levelSelectionMenu(),
    });
};
