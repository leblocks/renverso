import { addStateObserver, setState } from '../../state/index.js';
import { querySelector } from '../../web-api/index.js';

const locationComponentMap = {
    currentLocation: null, // holds name of the current state
    map: {}, // map of state names to html elements
};

/**
 * Updates html content of main container according to state changes. On state change
 * element associated with old state will be unmounted and element associated with new state
 * will be mounted under root div element.
 * @param {string} initialLocation String with initial location name.
 * @param {Object} initialMap Map of state names to HTMLElements.
 */
export default function router(initialLocation, initialMap) {
    // init map from closure with user provided value
    Object.assign(locationComponentMap.map, initialMap);

    const onStateChange = ({ location }) => {
        if (location !== locationComponentMap.currentLocation) {
            const mainContainer = querySelector('#root');
            mainContainer.innerHTML = '';
            mainContainer.appendChild(locationComponentMap.map[location]);
            locationComponentMap.currentLocation = location;
        }
    };

    // register as a state observer on a 'location' property of state
    addStateObserver(['location'], onStateChange);
    // init first state change and component mount
    setState({ location: initialLocation });
}
