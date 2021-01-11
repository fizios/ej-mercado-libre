import { fork, takeLatest, call, put, all } from 'redux-saga/effects';
import * as types from "../constants/actionTypes";
import { search, getDetails} from "../api"
import validateAuthor from "../utils/validateAuthor";

function* searchSaga({ query, host }) {
  try {
    const { data } = yield call(search, query, host);
    validateAuthor(data);
    yield put({ type: types.SEARCH_SUCCESS, data });
  } catch (error) {
    console.log("ERROR SEARCH_FAILURE: ", error);
    yield put({ type: types.SEARCH_FAILURE, error });
  }
}

function* detailsSaga({ id, host }) {
  try {
    const { data } = yield call(getDetails, id, host);
    validateAuthor(data);
    yield put({ type: types.GET_ITEM_SUCCESS, item: data.item });
  } catch (error) {
    console.log("ERROR GET_ITEM_FAILURE: ", error);
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

export const serverSaga = function* () {
  yield all([
    list(),details()
  ])
}
