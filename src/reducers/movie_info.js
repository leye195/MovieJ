import * as types from '../actions/ActionTypes';
const initialState={
    info:{
        id:0,
        title:'',
        overview:'',
        vote_average:0.0,
        backdrop:'',
        poster_path:'',
        status:'',
        runtime:0,
        release_date:"",
        tagline:"",
        revenue:0,
        review:undefined
    }
}
export default function movieinfo(state=initialState,action){
    if(action.type===types.MOVIE_DETAIL){
        return{
            ...state,
            info:action.movieinfo
        }
    }
    return state;
}
