import {
    router,
    puzzle,
    mainMenu,
    resetMenu,
    winnerMenu,
    resizeBoard,
    levelEditor,
    levelEditorMenu,
    levelSelectionMenu,
    themeSelectionMenu,
    lazyEyeSettingsMenu,
    leftEyeSettingsMenu,
    rightEyeSettingsMenu,
    randomLevelSelectionMenu,
    predefinedLevelSelectionMenu,
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
    LOCATION_RANDOM_LEVEL_SELECTION_MENU,
    LOCATION_PREDEFINED_LEVEL_SELECTION_MENU,
    LOCATION_LAZY_EYE_SETTINGS_MENU,
    LOCATION_LEFT_EYE_SETTINGS_MENU,
    LOCATION_RIGHT_EYE_SETTINGS_MENU,
    LOCATION_LEVEL_EDITOR_MENU,
    LOCATION_LEVEL_EDITOR,
} from './state/consts.js';

import { LOCAL_STORAGE_KEY } from './consts.js';

window.onresize = () => {
    resizeBoard();
};

window.onload = () => {
    const locationMap = {
        [LOCATION_GAME]: () => puzzle(),
        [LOCATION_MAIN_MENU]: mainMenu(),
        [LOCATION_RESET_MENU]: resetMenu(),
        [LOCATION_WINNER_MENU]: () => winnerMenu(),
        [LOCATION_COLOR_SETTINGS]: themeSelectionMenu(),
        [LOCATION_LEVEL_SELECTION_MENU]: levelSelectionMenu(),
        [LOCATION_LAZY_EYE_SETTINGS_MENU]: lazyEyeSettingsMenu(),
        [LOCATION_LEFT_EYE_SETTINGS_MENU]: leftEyeSettingsMenu(),
        [LOCATION_RIGHT_EYE_SETTINGS_MENU]: rightEyeSettingsMenu(),
        [LOCATION_RANDOM_LEVEL_SELECTION_MENU]: randomLevelSelectionMenu(),
        [LOCATION_PREDEFINED_LEVEL_SELECTION_MENU]: () => predefinedLevelSelectionMenu(),
    };

    if (process.env.NODE_ENV !== 'production') {
        locationMap[LOCATION_LEVEL_EDITOR_MENU] = () => levelEditorMenu();
        locationMap[LOCATION_LEVEL_EDITOR] = () => levelEditor();
    }

    router(LOCATION_MAIN_MENU, locationMap);

    const savedState = loadFromStorage(LOCAL_STORAGE_KEY);
    if (savedState !== null) {
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
