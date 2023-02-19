import {
    router,
    mainMenu,
    levelSelectionMenu,
    colorSelectionMenu,
} from './ui';

import {
    LOCATION_MAIN_MENU,
    LOCATION_LEVEL_SELECTION_MENU,
    LOCATION_COLOR_SETTINGS,
} from './state/consts.js';

window.onload = () => {
    router(LOCATION_MAIN_MENU, {
        [LOCATION_MAIN_MENU]: mainMenu(),
        [LOCATION_LEVEL_SELECTION_MENU]: levelSelectionMenu(),
        [LOCATION_COLOR_SETTINGS]: colorSelectionMenu(),
    });
};
