import {combineReducers} from 'redux';
import movielist from '../reducers/movielist';
import search from '../reducers/search';
import actor_info from '../reducers/actor_info';
import load from '../reducers/load';
import login from '../reducers/login';
const reducers = combineReducers({
    movielist,
    search,
    actor_info,
    load,
    login
});

export default reducers;