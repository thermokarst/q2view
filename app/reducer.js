import { routerReducer } from 'react-router-redux';

import { getDuxInRow } from './lib/dx';

import { initDux } from './init';
import { loaderDux } from './Loader';
import { peekDux } from './pages/Peek';
import { provenanceDux } from './pages/Provenance';
import { fromURLDux } from './pages/Home/FromURL';

const appReducer = getDuxInRow(
    initDux,
    loaderDux,
    peekDux,
    provenanceDux,
    fromURLDux
);


export default (state = {}, action) => {
    let appState = state.app;
    if (action.type === 'RESET_APP') {
        appState = undefined;
    }
    return {
        routing: routerReducer(state.routing, action),
        app: appReducer(appState, action)
    };
};
