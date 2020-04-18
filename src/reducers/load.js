import { handleActions } from "redux-actions";
export const LOADING = "LOADING";

const initialState = {
  completed: -1,
};
export default handleActions(
  {
    [LOADING]: (state, action) => {
      return {
        completed: action.completed,
      };
    },
  },
  initialState
);
