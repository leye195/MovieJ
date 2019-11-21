import * as types from '../actions/ActionTypes';

const initialState={
    completed:-1
}
export default function load(state=initialState,action){
    if(action.type===types.LOADING){
        return{
            completed:action.completed
        }
    }
    return state;
}