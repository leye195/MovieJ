import { handleActions, createAction } from "redux-actions";
import produce from "immer";

export const SIGNUP = "SIGNUP";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";

export const signup = createAction(SIGNUP);
export const signupSuccess = createAction(SIGNUP_SUCCESS);
export const signupFailure = createAction(SIGNUP_FAILURE);

export const login = createAction(LOGIN);
export const loginSuccess = createAction(LOGIN_SUCCESS);
export const loginFailure = createAction(LOGIN_FAILURE);
export const logout = createAction(LOGOUT);

const initialState = {
  login: {
    status: "waiting",
  },
  isSignedUp: false,
  isSigningUp: false,
};
export default handleActions(
  {
    [SIGNUP]: (state, action) =>
      produce(state, (draft) => {
        draft.isSigningUp = true;
      }),
    [SIGNUP_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.isSigningUp = false;
        draft.isSignedUp = true;
      }),
    [SIGNUP_FAILURE]: (state, action) =>
      produce(state, (draft) => {
        draft.isSigningUp = false;
      }),
    [LOGIN]: (state, action) =>
      produce(state, (draft) => {
        draft.login.status = "waiting";
      }),
    [LOGOUT]: (state, action) =>
      produce(state, (draft) => {
        draft.login.status = "waiting";
      }),
    [LOGIN_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.login.status = "success";
        draft.login.isLoggedIn = true;
        draft.login.currentUser = action.payload.name;
        draft.login._id = action.payload._id;
      }),
    [LOGIN_FAILURE]: (state, action) =>
      produce(state, (draft) => {
        draft.login.status = "failure";
        draft.isLoggedIn = false;
      }),
  },
  initialState
);
