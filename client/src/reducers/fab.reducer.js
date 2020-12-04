import { createAction, handleActions } from "redux-actions";
import { setState } from "./reducerUtils";

// Action Types
const SET_STATE = "shelter/fab/SET_STATE";

// Action Creators
export const fabActions = {
  setState: createAction(SET_STATE),
};

const initialState = {
  isMenuActive: false,
  isMapButtonActive: true,
  isListButtonActive: false,
  isLocationButtonActive: true,
  isCommentButtonActive: false,
};

// Reducer
export default handleActions(
  {
    [SET_STATE]: setState,
  },
  initialState
);
