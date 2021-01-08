import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, {END} from 'redux-saga';
import sagaMonitor from '@redux-saga/simple-saga-monitor'

import reducers from "../src/reducers";

export default function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
  const store = createStore(reducers, initialState, applyMiddleware(sagaMiddleware))

  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch(END)
  return store
}
