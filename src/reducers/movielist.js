import { createAction, handleActions } from "redux-actions";

export const NEXT_BTN = "NEXT_BTN";
export const VIEW = "VIEW";
export const MOVIELIST = "MOVIELIST";
export const LANGUAGE = "LANGUAGE";
export const LOADING = "LOADING";

export const setView = createAction(VIEW);
export const loadMovieList = createAction(MOVIELIST);
export const setLanguage = createAction(LANGUAGE);
export const setLoading = createAction(LOADING);

const initialState = {
  isloadingMovieList: false,
  total_pages: 0,
  movie_list: [],
  cur_page: -1,
  lan: "en-US",
  view: "poster",
};
export default handleActions(
  {
    [LOADING]: (state, action) => {
      return { ...state, isloadingMovieList: action.payload.loading };
    },
    [VIEW]: (state, action) => {
      return { ...state, view: action.view };
    },
    [MOVIELIST]: (state, action) => {
      return {
        ...state,
        movie_list: [...state.movie_list, ...action.payload.movie_list],
        total_pages: action.payload.total_pages,
        cur_page: action.payload.cur_page,
      };
    },
    [LANGUAGE]: (state, action) => {
      return {
        ...state,
        lan: action.lan,
      };
    },
    [NEXT_BTN]: (state, action) => {
      return { ...state, cur_page: state.cur_page + 1 };
    },
  },
  initialState
);
