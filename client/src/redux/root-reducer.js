import { SET_DATA } from "./action.types";

const INITIAL_STATE = {
  sortedWordsFrequency: null,
};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        sortedWordsFrequency: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
