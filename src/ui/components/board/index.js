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
    getStylesFor,
    applyStyles,
} from '../../../theme/index.js';

import {
    ELEMENT_CELL,
    ELEMENT_BOARD,
    ELEMENT_FLIPPED_CELL,
} from '../../../theme/consts.js';

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

const setBoardStyles = (element, theme) => applyStyles(element, getStylesFor(ELEMENT_BOARD, theme));

const setCellStyles = (cell, isFlipped, theme) => {
    applyStyles(cell, getStylesFor(isFlipped ? ELEMENT_CELL : ELEMENT_FLIPPED_CELL, theme));
};

/**
 * Creates new board component, according to a current state.
 */
export const initBoard = () => {
    const st = getState();
    const boardElement = createElement('div');
    getClassList(boardElement).add('board');
    // set initial color
    setBoardStyles(boardElement, st.theme);
    // observer color theme changes
    addStateObserver(['theme'], ({ theme }) => setBoardStyles(boardElement, theme));

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
            setCellStyles(cell, st.board[r][c], st.theme);
            // observer color theme changes
            addStateObserver(['board'], (state) => setCellStyles(cell, state.board[r][c], state.theme));

            row.appendChild(cell);
        }
        boardElement.appendChild(row);
    }
    return boardElement;
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
