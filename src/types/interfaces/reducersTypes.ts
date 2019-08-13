import { ICurrency } from "./currenciesInterface";

export interface CurrencyState {
  currencies: ICurrency[];
  favCurrencies: ICurrency[];
}

export interface LoadingState {
  appLoading: boolean;
}
