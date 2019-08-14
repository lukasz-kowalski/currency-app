import currencyReducer from "../../redux/reducers/currencyReducer";
import { currenciesData } from "../mockedData";
import { CurrencyState } from "../../types/interfaces/reducersTypes";
import {
  INIT,
  CurrenciesActionType
} from "../../types/interfaces/actionsInterface";
import {
  addCurrencies,
  addCurrency,
  removeCurrency,
  removeAllCurrencies
} from "../../redux/actions/currenciesActions";

const defaultState: CurrencyState = {
  currencies: [],
  favCurrencies: []
};

test("should set default state", () => {
  const state: CurrencyState = currencyReducer(undefined, { type: INIT });
  expect(state).toEqual(defaultState);
});

test("should add currencies to state", () => {
  const action: CurrenciesActionType = addCurrencies(currenciesData);
  const state: CurrencyState = currencyReducer(defaultState, action);
  expect(state).toEqual({
    ...defaultState,
    currencies: [...defaultState.currencies, ...action.payload]
  });
});

test("should add single favorite currency to state", () => {
  const action: CurrenciesActionType = addCurrency(currenciesData[0]);
  const state: CurrencyState = currencyReducer(defaultState, action);
  expect(state).toEqual({
    ...defaultState,
    favCurrencies: [...defaultState.favCurrencies, action.payload]
  });
});

test("should remove single favorite currency from state", () => {
  const store: CurrencyState = {
    currencies: [],
    favCurrencies: currenciesData
  };
  const action: CurrenciesActionType = removeCurrency(currenciesData[0].code);
  const state: CurrencyState = currencyReducer(store, action);
  const filteredStore = store.favCurrencies.filter(
    curr => curr.code !== action.payload
  );
  expect(state).toEqual({
    ...store,
    favCurrencies: filteredStore
  });
});

test("should remove all favorite currencies from state", () => {
  const store: CurrencyState = {
    currencies: [],
    favCurrencies: currenciesData
  };
  const action: CurrenciesActionType = removeAllCurrencies();
  const state: CurrencyState = currencyReducer(store, action);
  expect(state).toEqual({
    ...store,
    favCurrencies: []
  });
});
