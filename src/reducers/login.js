import * as types from '../actions/ActionTypes';
const initialState={
    login:{
        status:'waiting'
    }
}
export default function loginRequest(state=initialState,action){
    switch(action.type){
        case types.LOGIN:
            return{
                ...state,
                login:{
                    staus:'waiting'
                }
            };
        case types.LOGIN_SUCCESS:
            return{
                ...state,
                login:{
                    status:'success'
                },
                status:{
                    ...state.status,
                    isLoggedIn:true,
                    currentUser:action.name
                }
            }
        case types.LOGIN_FAILURE:
            return{
                ...state,
                login:{
                    staus:'failure'
                }
            }
        default:
            return state;
    }
}