import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';

import * as reducers from './reducers/index.js';

export default createStore(
  combineReducers({
    ...reducers
  }),
  compose(
    applyMiddleware(thunk),
    /* develblock:start */
    window.devToolsExtension ? window.devToolsExtension() : f => f
    /* develblock:end */
  )
);
