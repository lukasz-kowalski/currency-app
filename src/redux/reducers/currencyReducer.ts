import { CurrencyState } from "../../types/interfaces/reducersTypes";
import {
  CurrenciesActionType,
  ADD_FAV_CURRENCY,
  ADD_CURRENCIES,
  REMOVE_CURRENCY
} from "../../types/interfaces/actionsInterface";

const defaultState: CurrencyState = {
  currencies: [],
  favCurrencies: []
};

const currencyReducer = (
  state: CurrencyState = defaultState,
  action: CurrenciesActionType
): CurrencyState => {
  switch (action.type) {
    case ADD_FAV_CURRENCY:
      return {
        ...state,
        favCurrencies: [...state.favCurrencies, action.payload]
      };
    case ADD_CURRENCIES:
      return { ...state, currencies: [...state.currencies, ...action.payload] };
    case REMOVE_CURRENCY:
      return {
        ...state,
        favCurrencies: state.favCurrencies.filter(
          currency => currency.code !== action.payload
        )
      };
    default:
      return state;
  }
};

export default currencyReducer;
