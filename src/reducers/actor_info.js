import { handleActions, createAction } from "redux-actions";
import produce from "immer";
import user from "../img/user.svg";
export const ACTOR_INFO = "ACTOR_INFO";
export const ACTOR_IMG = "ACTOR_IMG";
export const loadActorInfo = createAction(ACTOR_INFO);
export const loadActorImg = createAction(ACTOR_IMG);
const initialState = {
  m_credits: [],
  actor_img: user,
};
export default handleActions(
  {
    [ACTOR_INFO]: (state, action) =>
      produce(state, (draft) => {
        draft.m_credits = action.m_credits;
      }),
    [ACTOR_IMG]: (state, action) =>
      produce(state, (draft) => {
        draft.actor_img = action.actor_img;
      }),
  },
  initialState
);
