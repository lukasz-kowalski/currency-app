import axios from "axios";
import { ICurrency } from "../../types/interfaces/currenciesInterface";
import {
  CurrenciesActionType,
  ADD_FAV_CURRENCY,
  ADD_CURRENCIES,
  REMOVE_CURRENCY,
  REMOVE_ALL_CURRENCIES,
  ThunkResult,
  ThunkAsyncDispatch
} from "../../types/interfaces/actionsInterface";
import { setLoading } from "./loadingActions";

export const addCurrency = (currency: ICurrency): CurrenciesActionType => ({
  type: ADD_FAV_CURRENCY,
  payload: currency
});

export const addCurrencies = (
  currencies: ICurrency[]
): CurrenciesActionType => ({
  type: ADD_CURRENCIES,
  payload: currencies
});

export const removeCurrency = (code: string): CurrenciesActionType => ({
  type: REMOVE_CURRENCY,
  payload: code
});

export const removeAllCurrencies = (): CurrenciesActionType => ({
  type: REMOVE_ALL_CURRENCIES
});

export const fetchCurrencyData = (): ThunkResult<void> => {
  return async (dispatch: ThunkAsyncDispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await axios.get(
        "http://api.nbp.pl/api/exchangerates/tables/a?format=json"
      );

      const currencies = response.data[0].rates;

      dispatch(addCurrencies(currencies));
    } catch (err) {
      console.log(err);
    }

    dispatch(setLoading(false));
  };
};
