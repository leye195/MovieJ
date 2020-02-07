import * as types from "../actions/ActionTypes";
const initialState = {
  fav_list: []
};
const favorite_movies = (state = initialState, action) => {
  if (action.type === types.FAVORITE) {
    return {
      ...state,
      fav_list: action.fav_list
    };
  }
  return state;
};

export default favorite_movies;
