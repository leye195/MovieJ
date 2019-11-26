import * as types from '../actions/ActionTypes';

const initialState={
    total_pages:0,
    movie_list:[],
    cur_page:-1,
    lan:"en-US",
    view:"poster",
}
export default function movielist(state=initialState,action){
    switch(action.type){
        case types.PAGE:
            return {...state,cur_page:action.cur_page};
        case types.NEXT_BTN:
            return{...state,cur_page:state.cur_page+1};
        case types.PREVIOUS_BTN:
            return{...state,cur_page:state.cur_page-1};
        case types.VIEW:
            return{...state,view:action.view};
        case types.MOVIELIST:
            return{
                ...state,
                movie_list:state.movie_list.concat(action.movie_list),
                total_pages:action.total_pages,
                cur_page:action.cur_page,
            };
        case types.LANGUAGE:
            return{
                ...state,
                lan:action.lan
            }
        default:
            return state;
    }
}