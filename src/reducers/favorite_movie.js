import { handleActions, createAction } from "redux-actions";
//Fav Movie
export const FAVORITE = "FAVORITE";
export const loadFavorite = createAction(FAVORITE);

const initialState = {
  fav_list: [],
};
export default handleActions(
  {
    [FAVORITE]: (state, action) => {
      return {
        ...state,
        fav_list: action.payload,
      };
    },
  },
  initialState
);
