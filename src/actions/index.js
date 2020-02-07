import * as types from "./ActionTypes";
/*SET PAGE */
export const page = cur_page => {
  return {
    type: types.PAGE,
    cur_page
  };
};
/*Button for Next,Previous and View */
export const nextbtn = cur_page => {
  return {
    type: types.NEXT_BTN,
    cur_page
  };
};
export const previousbtn = cur_page => {
  return {
    type: types.PREVIOUS_BTN,
    cur_page
  };
};
export const view = view => {
  return {
    type: types.VIEW,
    view
  };
};

/*GET MOVIE DATA LIST*/
export const get_movielist = (movie_list, total_pages, cur_page) => {
  return {
    type: types.MOVIELIST,
    movie_list,
    total_pages,
    cur_page
  };
};
/*GET MOVIE DETAIL INFO */
export const get_movie_detail = movieinfo => {
  return {
    type: types.MOVIE_DETAIL,
    movieinfo
  };
};

/*SEARCH*/
export const get_keyword = keyword => {
  return {
    type: types.KEYWORD,
    keyword
  };
};
export const search = results => {
  return {
    type: types.SEARCH,
    results
  };
};

/*LANGUAGE*/
export const language = lan => {
  return {
    type: types.LANGUAGE,
    lan
  };
};
/*ACTOR INFORMATION*/
export const actor_info = actor => {
  return {
    type: types.ACTOR_INFO,
    actor
  };
};
export const loading = completed => {
  return {
    type: types.LOADING,
    completed
  };
};
/*LOGIN*/
export const login = () => {
  return {
    type: types.LOGIN
  };
};
export const loginSuccess = (_id, name) => {
  return {
    type: types.LOGIN_SUCCESS,
    name,
    _id
  };
};
export const loginFailure = () => {
  return {
    type: types.LOGIN_FAILURE
  };
};
export const logout = () => {
  return {
    type: types.LOGOUT
  };
};

export const favoriteMovie = fav_list => {
  return {
    type: types.FAVORITE,
    fav_list
  };
};
