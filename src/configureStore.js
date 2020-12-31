import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';

import reducers from "./reducers";
import mySagas from "./sagas";

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const ConfigureStore = () => {
  let store;
  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history)
  ];

  if (process.env.NODE_ENV === 'production') {
    store = createStore(reducers, compose(applyMiddleware(...middlewares)));
  } else {
    // dev tools middleware and Logger
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    store = createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)));
  }

  sagaMiddleware.run(mySagas);
  return { store };
}

export default ConfigureStore;
