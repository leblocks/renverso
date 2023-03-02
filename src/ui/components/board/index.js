import {
    getClassList,
    getAttribute,
    setAttribute,
    createElement,
    setCSSProperty,
    querySelectorAll,
    addEventListener,
} from '../../../web-api/index.js';

import {
    getState,
    setState,
    addStateObserver,
} from '../../../state/index.js';

import { 
    getCellColor,
    getBoardColor,
    getColorThemeById,
} from '../../utils/index.js';

import {
    ROW_INDEX_ATTRIBUTE,
    COLUMN_INDEX_ATTRIBUTE,
    BOARD_PADDING,
    CELL_TO_MARGIN_RATIO,
} from '../../../consts.js';

const setCellDimensions = (cell, { width, height, margin }) => {
    setCSSProperty(cell, 'width', width);
    setCSSProperty(cell, 'height', height);
    setCSSProperty(cell, 'margin', margin);
};

const calculateCellDimensions = (board) => {
    const rowCount = board.length;
    const units = window.innerWidth < window.innerHeight ? 'vw' : 'vh';
    // assuming for now that rowCount === columnCount always
    const boardSize = (100 - (2 * BOARD_PADDING));
    const cellSize = Math.floor((1 - CELL_TO_MARGIN_RATIO) * (boardSize / rowCount));
    const margin = cellSize * CELL_TO_MARGIN_RATIO + units;
    return { margin, width: cellSize + units, height: cellSize + units };
};

/**
 * @param {Event} e Cell onclick event handler.
 */
const onCellClick = ({ target }) => {
    const { board, pattern } = getState();
    const row = parseInt(getAttribute(target, ROW_INDEX_ATTRIBUTE), 10);
    const col = parseInt(getAttribute(target, COLUMN_INDEX_ATTRIBUTE), 10);

    pattern(row, col) // flip cells calculated by pattern
        .forEach(([r, c]) => {
            board[r][c] = !board[r][c];
        });

    setState({ board });
};

const setBoardColor = (container, colorTheme) => {
    const theme = getColorThemeById(colorTheme);
    setCSSProperty(container, 'background-color', getBoardColor(theme));
};

const setCellColor = (cell, state, r, c) => {
    setCSSProperty(cell, 'background-color', 
        getCellColor(state.board[r][c], getColorThemeById(state.colorTheme)));
};

/**
 * Creates new board component, according to a current state.
 */
export const initBoard = () => {
    const st = getState();
    const container = createElement('div');
    getClassList(container).add('board');
    // set initial color
    setBoardColor(container, st.colorTheme);
    // observer color theme changes
    addStateObserver(['colorTheme'], ({ colorTheme }) => setBoardColor(container, colorTheme));

    const { board } = getState();
    // build row
    for (let r = 0; r < board.length; r += 1) {
        const row = createElement('div');
        getClassList(row).add('row');

        // build cells in the row
        for (let c = 0; c < board[r].length; c += 1) {
            const cell = createElement('div');
            getClassList(cell).add('cell');
            setAttribute(cell, ROW_INDEX_ATTRIBUTE, r);
            setAttribute(cell, COLUMN_INDEX_ATTRIBUTE, c);
            addEventListener(cell, 'click', onCellClick);
            setCellDimensions(cell, calculateCellDimensions(board));
            // set initial color
            setCellColor(cell, st, r, c);
            // observer color theme changes
            addStateObserver(['board'], (state) => setCellColor(cell, state, r, c));

            row.appendChild(cell);
        }
        container.appendChild(row);
    }
    return container;
};

/**
 * Callback for window.onresize, to keep cell sizes correct.
 */
export const resizeBoard = () => {
    querySelectorAll('.cell')
        .forEach((cell) => {
            const { board } = getState();
            setCellDimensions(cell, calculateCellDimensions(board));
        });
};
