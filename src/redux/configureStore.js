/* eslint-disable global-require */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './rootReducer';

function configureStore() {
  const middlewares = [];

  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );
  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}

export default configureStore();