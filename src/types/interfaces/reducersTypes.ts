import { ICurrency } from "./currenciesInterface";

export interface CurrencyState {
  currencies: ICurrency[];
  favCurrencies: ICurrency[];
}

export interface LoadingState {
  appLoading: boolean;
}

export interface RootState {
  currencies: CurrencyState;
  loaders: LoadingState;
}
