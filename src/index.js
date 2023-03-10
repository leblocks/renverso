import {
    router,
    puzzle,
    mainMenu,
    resetMenu,
    resizeBoard,
    levelSelectionMenu,
    themeSelectionMenu,
} from './ui';

import {
    LOCATION_GAME,
    LOCATION_MAIN_MENU,
    LOCATION_RESET_MENU,
    LOCATION_COLOR_SETTINGS,
    LOCATION_LEVEL_SELECTION_MENU,
} from './state/consts.js';

window.onresize = () => {
    resizeBoard();
};

window.onload = () => {
    router(LOCATION_MAIN_MENU, {
        [LOCATION_MAIN_MENU]: mainMenu(),
        [LOCATION_LEVEL_SELECTION_MENU]: levelSelectionMenu(),
        [LOCATION_COLOR_SETTINGS]: themeSelectionMenu(),
        [LOCATION_GAME]: () => puzzle(),
        [LOCATION_RESET_MENU]: resetMenu(),
    });
};
