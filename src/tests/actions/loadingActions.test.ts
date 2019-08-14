import { setLoading } from "../../redux/actions/loadingActions";
import { SET_LOADING } from "../../types/interfaces/actionsInterface";

test("should add payload with true value to action object", () => {
  const action = setLoading(true);
  expect(action).toEqual({
    type: SET_LOADING,
    payload: true
  });
});

test("should add payload with false value to action object", () => {
  const action = setLoading(false);
  expect(action).toEqual({
    type: SET_LOADING,
    payload: false
  });
});
