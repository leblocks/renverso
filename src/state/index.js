// TODO this code is copied from other project, check if some methods still relevant
import { LOCATION_MAIN_MENU } from './consts.js';

import { wholeCrossPatternProvider } from '../game/index.js';

const defaultState = {
    location: LOCATION_MAIN_MENU,

    // TODO debug data
    board: [
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
    ],
    moves: [],
    solution: [],

    // TODO debug data
    pattern: wholeCrossPatternProvider(5, 5),
};

// state instance
const state = { ...defaultState };

// on various state updates -> notify observers
// observer entry: { properties: [], callback }
const stateObservers = [];

function updateState(stateUpdates, notifyObservers) {
    // update state
    Object.assign(state, stateUpdates);
    const stateUpdateKeys = Object.keys(stateUpdates);
    if (notifyObservers) {
        // iterate over all observers
        stateObservers.forEach(({ properties, callback }) => {
            // disabled eslint rule for the sake of readability
            // eslint-disable-next-line arrow-body-style
            const shouldNotify = properties.some((property) => {
                // notify observer only if it subscribed to those updates
                return stateUpdateKeys.includes(property);
            });

            // if there are no properties to listen -> update every time
            if (shouldNotify || properties.length === 0) {
                callback(state);
            }
        });
    }
}

/**
 * Updates state and notifies registered state observers.
 * @param {Object} stateUpdates Object containing new values that will be merged in
 * the current state.
 */
export function setState(stateUpdates) {
    updateState(stateUpdates, true);
}

/**
 * Updates state, but doesn't notify observers.
 * @param {Object} stateUpdates Object containing new values that will be merged in
 * the current state.
 */
export function setStateSilently(stateUpdates) {
    updateState(stateUpdates, false);
}

export function getState() {
    return state;
}

export function resetState() {
    Object.assign(state, defaultState);
}

/**
 * Registers state observer.
 * @param {string[]} properties List of state properties to listen.
 * On state change `callback` will be called if state had updates in those properties.
 * @param {function} callback Callback to execute on state update.
 */
export function addStateObserver(properties, callback) {
    const stateKeys = Object.keys(state);
    properties.forEach((prop) => {
        if (!stateKeys.includes(prop)) {
            throw new Error(`${prop} is not key in the state.`);
        }
    });
    stateObservers.push({ properties, callback });
}

export function removeStateObservers() {
    stateObservers.splice(0, stateObservers.length);
}
