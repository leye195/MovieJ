import { combineReducers } from "redux";
import movielist from "../reducers/movielist";
import search from "../reducers/search";
import actor_info from "../reducers/actor_info";
import load from "../reducers/load";
import login from "../reducers/login";
import movie_detail from "../reducers/movie_info";
import favorite_movies from "../reducers/favorite_movie";
const reducers = combineReducers({
  movielist,
  search,
  actor_info,
  load,
  login,
  movie_detail,
  favorite_movies
});

export default reducers;
