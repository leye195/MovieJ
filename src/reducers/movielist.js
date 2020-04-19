import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import moment from "moment";

export const NEXT_BTN = "NEXT_BTN";
export const VIEW = "VIEW";
export const MOVIELIST = "MOVIELIST";
export const LANGUAGE = "LANGUAGE";
export const LOADING = "LOADING";
export const CONDITION = "CONDITION";

export const setView = createAction(VIEW);
export const loadMovieList = createAction(MOVIELIST);
export const setLanguage = createAction(LANGUAGE);
export const setLoading = createAction(LOADING);
export const setCondition = createAction(CONDITION);

const initialState = {
  isloadingMovieList: false,
  total_pages: 0,
  movie_list: [],
  cur_page: -1,
  lan: "en-US",
  view: "poster",
  minRate: 0,
  maxRate: 10,
  minDate: "",
  maxDate: moment().format("YYYY-MM-DD"),
  minRunTime: 0,
  maxRunTime: 400,
};
export default handleActions(
  {
    [LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.isloadingMovieList = action.payload.loading;
      }),
    [VIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.view = action.payload.view;
      }),
    [MOVIELIST]: (state, action) =>
      produce(state, (draft) => {
        if (action.payload.cur_page > 1)
          draft.movie_list = draft.movie_list.concat(action.payload.movie_list);
        else draft.movie_list = action.payload.movie_list;
        draft.cur_page = action.payload.cur_page;
        draft.total_pages = action.payload.total_pages;
      }),
    [LANGUAGE]: (state, action) =>
      produce(state, (draft) => {
        draft.lan = action.lan;
      }),
    [NEXT_BTN]: (state, action) =>
      produce(state, (draft) => {
        draft.cur_page = draft.cur_page + 1;
      }),
    [CONDITION]: (state, action) =>
      produce(state, (draft) => {
        const { payload } = action;
        draft.minDate = payload.minDate;
        draft.maxDate = payload.maxDate;
        draft.minRate = payload.minRate;
        draft.maxRate = payload.maxRate;
        draft.minRunTime = payload.minRunTime;
        draft.maxRunTime = payload.maxRunTime;
      }),
  },
  initialState
);
