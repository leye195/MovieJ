import { createAction, handleActions } from "redux-actions";
export const MOVIE_DETAIL = "MOVIE_DETAIL";
export const loadMovieDetail = createAction(MOVIE_DETAIL);

const initialState = {
  info: {
    id: 0,
    title: "",
    overview: "",
    vote_average: 0.0,
    backdrop: "",
    poster_path: "",
    status: "",
    runtime: 0,
    release_date: "",
    tagline: "",
    revenue: 0,
    review: undefined,
    links: [],
  },
};
export default handleActions(
  {
    [MOVIE_DETAIL]: (state, action) => {
      return {
        ...state,
        info: action.payload.movieinfo,
      };
    },
  },
  initialState
);
