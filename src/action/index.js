import * as types from "../constants/actionTypes";

export const search = (q, host) => ({type: types.SEARCH_REQUEST, query: q, host});
export const getItem = (id, host) => ({type: types.GET_ITEM_REQUEST, id, host});
