import { setState } from '../state/index.js';

export const goto = (targetLocation) => setState({ location: targetLocation });
export const setTheme = (theme) => setState({ theme });
