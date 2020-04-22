import { handleActions, createAction } from "redux-actions";
import produce from "immer";
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
    [SEARCH]: (state, action) =>
      produce(state, (draft) => {
        draft.results = action.payload.results;
      }),
    [KEYWORD]: (state, action) =>
      produce(state, (draft) => {
        draft.keyword = action.payload.keyword;
      }),
  },
  initialState
);
