import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { ICurrency } from "./currenciesInterface";
import { CurrencyState } from "./reducersTypes";

export const ADD_FAV_CURRENCY = "ADD_FAV_CURRENCY";
export const ADD_CURRENCIES = "ADD_CURRENCIES";
export const REMOVE_CURRENCY = "REMOVE_CURRENCY";
export const REMOVE_ALL_CURRENCIES = "REMOVE_ALL_CURRENCIES";

export const INIT = "@@INIT";

export const SET_LOADING = "SET_LOADING";

interface AddCurrencyAction {
  type: typeof ADD_FAV_CURRENCY;
  payload: ICurrency;
}

interface AddCurrenciesAction {
  type: typeof ADD_CURRENCIES;
  payload: ICurrency[];
}

interface RemoveCurrencyAction {
  type: typeof REMOVE_CURRENCY;
  payload: string;
}

interface RemoveAllCurrencies {
  type: typeof REMOVE_ALL_CURRENCIES;
  payload?: void;
}

interface Init {
  type: typeof INIT;
  payload?: void;
}

export type CurrenciesActionType =
  | Init
  | AddCurrencyAction
  | AddCurrenciesAction
  | RemoveCurrencyAction
  | RemoveAllCurrencies;

interface SetLoading {
  type: typeof SET_LOADING;
  payload: boolean;
}

export type LoadingActionType = SetLoading | Init;

export type ThunkResult<R> = ThunkAction<
  R,
  CurrencyState,
  null,
  LoadingActionType | CurrenciesActionType
>;

export type ThunkAsyncDispatch = ThunkDispatch<
  CurrencyState,
  null,
  LoadingActionType | CurrenciesActionType
>;
