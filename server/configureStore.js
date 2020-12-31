import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from "../src/reducers";
import mySagas from "../src/sagas";

const sagaMiddleware = createSagaMiddleware();

const ConfigureStore = (initialState = {}) => {
  const store = createStore(reducers, initialState, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(mySagas);
  return store;
}

export default ConfigureStore;
