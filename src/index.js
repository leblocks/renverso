import {
    router,
    mainMenu,
} from './ui';

import {
    LOCATION_MAIN_MENU,
} from './state/consts.js';

window.onload = () => {
    router(LOCATION_MAIN_MENU, {
        [LOCATION_MAIN_MENU]: mainMenu(),
    });
};
