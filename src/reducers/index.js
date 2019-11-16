import {combineReducers} from 'redux';
import movielist from '../reducers/movielist';
import search from '../reducers/search';
const reducers = combineReducers({
    //movielist,
    search
});

export default reducers;