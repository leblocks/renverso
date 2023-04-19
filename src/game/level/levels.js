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
    {
        id: 60,
        board: [
            [true, true, true, true],
            [false, true, false, true],
            [true, false, true, true],
            [false, true, false, true],
        ],
        solution: [[3, 0], [2, 0], [3, 1], [3, 2], [2, 1], [1, 0],
            [1, 1], [2, 2], [2, 3], [1, 2], [0, 1]],
        pattern: WHOLE_CROSS_PATTERN,
    },
    {
        id: 70,
        board: [
            [false, false, false, false],
            [false, true, true, false],
            [false, true, true, false],
            [true, false, false, false],
        ],
        solution: [[0, 1], [0, 2], [0, 3], [1, 3], [2, 3]],
        pattern: WHOLE_CROSS_PATTERN,
    },
    {
        id: 80,
        board: [
            [true, true, true, true],
            [true, false, false, true],
            [true, false, true, true],
            [true, true, true, true],
        ],
        solution: [[3, 2], [2, 3], [0, 2], [1, 1], [2, 0]],
        pattern: WHOLE_CROSS_PATTERN,
    },
    {
        id: 90,
        board: [
            [true, false, false, true],
            [false, true, true, false],
            [false, true, true, false],
            [true, false, false, true],
        ],
        solution: [[1, 0], [0, 1], [0, 2], [1, 3], [2, 3], [3, 2], [3, 1], [2, 0]],
        pattern: WHOLE_CROSS_PATTERN,
    },
    {
        id: 100,
        board: [
            [true, true, true, true],
            [true, true, true, true],
            [true, true, true, true],
            [true, true, true, false],
        ],
        solution: [[0, 3], [1, 3], [2, 3], [3, 3], [3, 0],
            [3, 1], [3, 2], [3, 3], [3, 3],
        ],
        pattern: WHOLE_CROSS_PATTERN,
    },
    {
        id: 110,
        board: [
            [true, true, false, true, true],
            [true, false, false, false, true],
            [false, false, false, false, false],
            [true, false, false, false, true],
            [true, true, false, true, true],
        ],
        solution: [[3, 3], [1, 3], [1, 1], [3, 1], [2, 2]],
        pattern: WHOLE_CROSS_PATTERN,
    },
    {
        id: 120,
        board: [
            [true, false, true, false, true],
            [false, false, true, false, false],
            [true, true, true, true, true],
            [false, false, true, false, false],
            [true, false, true, false, true],
        ],
        solution: [[3, 1], [2, 2], [1, 3], [3, 3], [2, 2], [1, 1], [1, 0], [0, 1],
            [4, 3], [3, 4], [1, 4], [0, 3], [4, 1], [3, 0]],
        pattern: WHOLE_CROSS_PATTERN,
    },
    {
        id: 130,
        board: [
            [false, true, true, false, true],
            [true, true, false, true, false],
            [true, false, true, false, true],
            [false, true, false, true, true],
            [true, false, true, true, false],
        ],
        solution: [[0, 0], [0, 1], [1, 0], [4, 3], [4, 4], [3, 4]],
        pattern: WHOLE_CROSS_PATTERN,
    },
    {
        id: 140,
        board: [
            [true, false, false, false, true],
            [true, false, false, false, true],
            [false, true, false, true, false],
            [false, false, false, false, false],
            [false, true, false, true, false],
        ],
        solution: [[3, 1], [2, 2], [3, 3], [4, 2], [3, 2]],
        pattern: WHOLE_CROSS_PATTERN,
    },
    {
        id: 150,
        board: [
            [false, true, false, true, false],
            [true, false, false, false, true],
            [false, false, false, false, false],
            [true, false, false, false, true],
            [false, true, false, true, false],
        ],
        solution: [[4, 4], [3, 3], [1, 3], [0, 4], [3, 1],
            [4, 0], [1, 1], [0, 0], [2, 2]],
        pattern: WHOLE_CROSS_PATTERN,
    },

];
