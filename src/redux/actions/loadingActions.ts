import {
  SET_LOADING,
  LoadingActionType
} from "../../types/interfaces/actionsInterface";

export const setLoading = (status: boolean): LoadingActionType => ({
  type: SET_LOADING,
  payload: status
});
