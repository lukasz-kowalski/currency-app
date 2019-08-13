import axios from "axios";
import { ICurrency } from "../../types/interfaces/currenciesInterface";
import {
  CurrenciesActionType,
  ADD_FAV_CURRENCY,
  ADD_CURRENCIES,
  REMOVE_CURRENCY,
  ThunkResult,
  ThunkAsyncDispatch
} from "../../types/interfaces/actionsInterface";
import { setLoading } from "./loadingActions";

export const addCurrency = (currency: ICurrency): CurrenciesActionType => ({
  type: ADD_FAV_CURRENCY,
  payload: currency
});

const addCurrencies = (currencies: ICurrency[]): CurrenciesActionType => ({
  type: ADD_CURRENCIES,
  payload: currencies
});

export const removeCurrency = (code: string): CurrenciesActionType => ({
  type: REMOVE_CURRENCY,
  payload: code
});

export const fetchCurrencyData = (): ThunkResult<void> => {
  return async (dispatch: ThunkAsyncDispatch) => {
    dispatch(setLoading(true));

    const data: ICurrency[] = await axios.get(
      "http://api.nbp.pl/api/exchangerates/tables/c?format=json"
    );

    dispatch(addCurrencies(data));
    dispatch(setLoading(false));
  };
};
