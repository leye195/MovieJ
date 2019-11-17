import * as types from '../actions/ActionTypes';
import user from '../img/user.svg'
const initialState={
    m_credits:[],
    actor_img:user,
}
export default function actor_info(state=initialState,action){
    switch(action.type){
        case types.ACTOR_INFO:
            return{...state,m_credits:action.m_credits};
        case types.ACTOR_IMG:
            return{...state,actor_img:action.actor_img};
        default:
            return state;
    }
}