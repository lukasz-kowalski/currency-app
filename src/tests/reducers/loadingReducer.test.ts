import loadingReducer from "../../redux/reducers/loadingReducer";
import { LoadingState } from "../../types/interfaces/reducersTypes";
import {
  INIT,
  LoadingActionType
} from "../../types/interfaces/actionsInterface";
import { setLoading } from "../../redux/actions/loadingActions";

const defaultState: LoadingState = {
  appLoading: false
};

test("should set default state", () => {
  const state: LoadingState = loadingReducer(undefined, { type: INIT });
  expect(state).toEqual(defaultState);
});

test("should set loading to true in state", () => {
  const action: LoadingActionType = setLoading(true);
  const state: LoadingState = loadingReducer(defaultState, action);
  expect(state).toEqual({
    ...defaultState,
    appLoading: action.payload
  });
});

test("should set loading to false in state", () => {
  const action: LoadingActionType = setLoading(false);
  const state: LoadingState = loadingReducer(defaultState, action);
  expect(state).toEqual({
    ...defaultState,
    appLoading: action.payload
  });
});
