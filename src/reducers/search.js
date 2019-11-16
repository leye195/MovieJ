import * as types from '../actions/ActionTypes';

const initialState={
    keyword:"",
    results:[]
}
export default function search(state=initialState,action){
    switch(action.type){
        case types.SEARCH:
            return {...state,results:action.results};
        case types.KEYWORD:
            return {...state,keyword:action.keyword};
        default:
            return state;
    }
    
}