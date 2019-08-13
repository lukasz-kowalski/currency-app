import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import currencyReducer from "../reducers/currencyReducer";
import loadingReducer from "../reducers/loadingReducer";

export default () => {
  const store = createStore(
    combineReducers({
      currencies: currencyReducer,
      loaders: loadingReducer
    }),
    applyMiddleware(thunk)
  );

  return store;
};
