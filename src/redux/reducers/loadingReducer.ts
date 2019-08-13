import { LoadingState } from "../../types/interfaces/reducersTypes";
import {
  LoadingActionType,
  SET_LOADING
} from "../../types/interfaces/actionsInterface";

const defaultState: LoadingState = {
  appLoading: false
};

const loadingReducer = (
  state: LoadingState = defaultState,
  action: LoadingActionType
): LoadingState => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        appLoading: action.payload
      };
    default:
      return state;
  }
};

export default loadingReducer;
