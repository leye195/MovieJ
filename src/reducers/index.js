import {combineReducers} from 'redux';
import movielist from '../reducers/movielist';
import search from '../reducers/search';
import actor_info from '../reducers/actor_info';
import load from '../reducers/load';
const reducers = combineReducers({
    movielist,
    search,
    actor_info,
    load
});

export default reducers;