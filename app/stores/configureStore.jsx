//if (process.env.NODE_ENV === 'production') {
//    module.exports = require('./configureStore.prod.jsx');
//} else {
//    module.exports = require('./configureStore.dev.jsx');
//}

import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index.jsx';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

module.exports = function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, reduxImmutableStateInvariant())
    );
}