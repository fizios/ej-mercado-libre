import * as types from "../constants/actionTypes";

export const search = q => ({type: types.SEARCH_REQUEST, query: q});
export const getItem = id => ({type: types.GET_ITEM_REQUEST, id});
