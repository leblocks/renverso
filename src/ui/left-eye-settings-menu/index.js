import { setState } from '../../state/index.js';

import {
    colorPicker,
    colorIndicator,
    menu,
    menuItem,
    menuTitle,
} from '../components/index.js';

import { goto } from '../../utils/index.js';

import {
    LOCATION_LAZY_EYE_SETTINGS_MENU,
} from '../../state/consts.js';

export default function leftEyeSettingsMenu() {
    return menu([
        menuTitle('Left eye color'),
        colorIndicator((state) => state.leftEyeColor),
        colorPicker((color) => setState({ leftEyeColor: color })),
        menuItem('Back', () => goto(LOCATION_LAZY_EYE_SETTINGS_MENU)),
    ]);
}
