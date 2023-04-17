import { goto } from '../../utils/index.js';

import {
    getState,
    setState,
} from '../../state/index.js';

import {
    getClassList,
    createElement,
    setCSSProperty,
} from '../../web-api/index.js';

import { initBoard } from '../board/index.js';

import { getPredefinedLevels } from '../../game/level/index.js';

import { undoMove } from '../../game/logic/index.js';

import { statusLineButton } from '../components/index.js';

import { LOCATION_LEVEL_EDITOR_MENU } from '../../state/consts.js';

const getPrintButton = () => statusLineButton('print', () => {
    const levels = getPredefinedLevels();
    const { moves, board, pattern } = getState();
    const level = JSON.stringify({
        id: levels[levels.length - 1].id + 10,
        board,
        solution: moves,
        pattern: `${pattern.replace(' ', '_').toUpperCase()}_PATTERN`,
    }, null, 4)
        .replaceAll('"', '');
        // eslint-disable-next-line no-console
    console.log(level);
});

const undo = () => {
    const state = getState();
    setState({ ...undoMove(state) });
};

const reset = () => {
    const { board } = getState();
    setState({
        moves: [],
        board: board.map((row) => row.map(() => true)),
    });
};

const buildEditorStatusLine = () => {
    const el = createElement('div');
    getClassList(el).add('status-line');
    el.appendChild(statusLineButton('back', () => goto(LOCATION_LEVEL_EDITOR_MENU)));
    el.appendChild(statusLineButton('undo', undo));
    el.appendChild(statusLineButton('reset', reset));
    el.appendChild(getPrintButton());
    return el;
};

export default function levelEditor() {
    const el = createElement('div');
    setCSSProperty(el, 'height', '100%');
    el.appendChild(initBoard());
    el.appendChild(buildEditorStatusLine());
    return el;
}
