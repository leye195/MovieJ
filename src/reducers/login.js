import { handleActions, createAction } from "redux-actions";
export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";

export const login = createAction(LOGIN);
export const logout = createAction(LOGOUT);

const initialState = {
  login: {
    status: "waiting",
  },
};
export default handleActions(
  {
    [LOGIN]: (state, action) => {
      return {
        ...state,
        login: {
          status: "waiting",
        },
      };
    },
    [LOGOUT]: (state, action) => {
      return {
        ...state,
        login: {
          status: "waiting",
        },
      };
    },
    [LOGIN_SUCCESS]: (state, action) => {
      return {
        ...state,
        login: {
          status: "success",
          isLoggedIn: true,
          currentUser: action.name,
          _id: action._id,
        },
      };
    },
    [LOGIN_FAILURE]: (state, action) => {
      return {
        ...state,
        login: {
          status: "failure",
          isLoggedIn: false,
        },
      };
    },
  },
  initialState
);
/*
export default function loginRequest(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        login: {
          status: "waiting",
        },
      };
    case LOGOUT:
      return {
        ...state,
        login: {
          status: "waiting",
        },
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          status: "success",
          isLoggedIn: true,
          currentUser: action.name,
          _id: action._id,
        },
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        login: {
          status: "failure",
          isLoggedIn: false,
        },
      };
    default:
      return state;
  }
}*/
