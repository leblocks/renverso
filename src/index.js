import {
    router,
    puzzle,
    mainMenu,
    resetMenu,
    winnerMenu,
    resizeBoard,
    levelSelectionMenu,
    themeSelectionMenu,
} from './ui';

import {
    setState,
    getState,
    addStateObserver,
} from './state/index.js';

import {
    saveToStorage,
    loadFromStorage,
} from './web-api/index.js';

import {
    LOCATION_GAME,
    LOCATION_MAIN_MENU,
    LOCATION_RESET_MENU,
    LOCATION_WINNER_MENU,
    LOCATION_COLOR_SETTINGS,
    LOCATION_LEVEL_SELECTION_MENU,
} from './state/consts.js';

import { LOCAL_STORAGE_KEY } from './consts.js';

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
        [LOCATION_WINNER_MENU]: () => winnerMenu(),
    });

    const savedState = loadFromStorage(LOCAL_STORAGE_KEY);
    if (savedState !== null) {
        // reload state
        setState({ ...JSON.parse(savedState) });
    } else {
        // workaround (kludge) to enfore styling
        // on a fresh start
        setState({ theme: 'light' });
    }

    // on any state change write it to the local storage
    const keys = Object.keys(getState());
    addStateObserver(keys, (state) => saveToStorage(LOCAL_STORAGE_KEY, JSON.stringify(state)));
};
