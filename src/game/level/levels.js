import { WHOLE_CROSS_PATTERN } from '../pattern/const.js';

// eslint-disable-next-line import/prefer-default-export
export const levels = [
    {
        id: 10,
        board: [
            [false, true, true, true],
            [false, true, true, true],
            [false, true, true, true],
            [false, false, false, false],
        ],
        solution: [[3, 0]],
        pattern: WHOLE_CROSS_PATTERN,
    },
    {
        id: 20,
        board: [
            [false, true, true, false],
            [true, true, true, true],
            [true, true, true, true],
            [false, true, true, false],
        ],
        solution: [[3, 0], [0, 0], [0, 3], [3, 3]],
        pattern: WHOLE_CROSS_PATTERN,
    },
    {
        id: 30,
        board: [
            [true, true, true, true],
            [true, false, false, true],
            [true, false, false, true],
            [true, true, true, true],
        ],
        solution: [[1, 1], [1, 2], [2, 2], [2, 1]],
        pattern: WHOLE_CROSS_PATTERN,
    },
    {
        id: 40,
        board: [
            [true, false, true, true],
            [false, true, true, true],
            [true, true, true, false],
            [true, true, false, true],
        ],
        solution: [[1, 0], [2, 3], [3, 2], [0, 1]],
        pattern: WHOLE_CROSS_PATTERN,
    },
    {
        id: 50,
        board: [
            [true, true, true, false],
            [true, true, false, true],
            [true, false, true, true],
            [false, true, true, true],
        ],
        solution: [[3, 0], [2, 1], [1, 2], [0, 3]],
        pattern: WHOLE_CROSS_PATTERN,
    },
];
