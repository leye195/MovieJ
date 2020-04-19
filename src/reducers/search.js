import { handleActions, createAction } from "redux-actions";
export const SEARCH = "SEARCH";
export const KEYWORD = "KEYWORD";

export const search = createAction(SEARCH);
export const getKeyword = createAction(KEYWORD);

const initialState = {
  keyword: "",
  results: [],
};
export default handleActions(
  {
    [SEARCH]: (state, action) => {
      return { ...state, results: action.results };
    },
    [KEYWORD]: (state, action) => {
      return { ...state, keyword: action.keyword };
    },
  },
  initialState
);
