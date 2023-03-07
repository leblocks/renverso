import { addStateObserver } from '../../state/index.js';

import { LOCATION_GAME } from '../../state/consts.js';

import { setCSSProperty } from '../../web-api/index.js';
import { menuItem } from '../components/index.js';
import { goto } from '../../utils/index.js';

// TODO test it
export default function continueButton() {
    const el = menuItem('continue', () => goto(LOCATION_GAME));
    setCSSProperty(el, 'display', 'none');

    // pattern being changed only on new level
    addStateObserver(['pattern'], ({ pattern }) => {
        setCSSProperty(el, 'display', pattern === null ? 'none' : 'block');
    });

    return el;
}
