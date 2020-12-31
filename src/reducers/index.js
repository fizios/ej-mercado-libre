import { combineReducers } from 'redux';
import * as types from "../constants/actionTypes";

const list  = (state = {}, action) => {
  switch (action.type) {
    case types.SEARCH_REQUEST:
      return { ...state};
    case types.SEARCH_FAILURE:
      return { ...state};
    case types.SEARCH_SUCCESS:
      return action.data;
    default:
      return { ...state};
  }
};

const item = (state = {}, action) => {
  switch (action.type) {
    case types.GET_ITEM_REQUEST:
      return { ...state};
    case types.GET_ITEM_FAILURE:
      return { ...state};
    case types.GET_ITEM_SUCCESS: {
      const { item } = action;
      const newState = { ...state };
      if (!newState[item.id]) {
        newState[item.id] = item;
      }
      return newState
    }
    default:
      return { ...state};
  }
}

const mainReducer = combineReducers({
  list,
  item
})

export default mainReducer;
