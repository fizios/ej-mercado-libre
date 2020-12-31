import { fork, takeLatest, call, put } from 'redux-saga/effects';
import * as types from "../constants/actionTypes";
import { search, getDetails} from "../api"

function* searchSaga({ query }) {
  try {
    const { data } = yield call(search, query);
    console.log("data", data);
    yield put({ type: types.SEARCH_SUCCESS, data });
  } catch (error) {
    yield put({ type: types.SEARCH_FAILURE, error });
  }
}

function* detailsSaga({ id }) {
  try {
    const { data } = yield call(getDetails, id);
    yield put({ type: types.GET_ITEM_SUCCESS, item: data.item });
  } catch (error) {
    yield put({ type: types.GET_ITEM_FAILURE, error });
  }
}

const list = function* watcherSaga() {
  yield takeLatest(types.SEARCH_REQUEST, searchSaga);
}
const details = function* watcherSaga() {
  yield takeLatest(types.GET_ITEM_REQUEST, detailsSaga);
}

export default function* root() {
  yield fork(list);
  yield fork(details);
}