import * as types from "../actions/ActionTypes";
const initialState = {
  login: {
    status: "waiting"
  }
};
export default function loginRequest(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        login: {
          status: "waiting"
        }
      };
    case types.LOGOUT:
      return {
        ...state,
        login: {
          status: "waiting"
        }
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          status: "success",
          isLoggedIn: true,
          currentUser: action.name,
          _id: action._id
        }
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        login: {
          status: "failure",
          isLoggedIn: false
        }
      };
    default:
      return state;
  }
}
