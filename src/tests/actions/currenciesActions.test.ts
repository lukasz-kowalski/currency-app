import {
  addCurrency,
  addCurrencies,
  removeCurrency,
  removeAllCurrencies
} from "../../redux/actions/currenciesActions";
import {
  ADD_CURRENCIES,
  ADD_FAV_CURRENCY,
  REMOVE_CURRENCY,
  REMOVE_ALL_CURRENCIES
} from "../../types/interfaces/actionsInterface";
import { currenciesData } from "../mockedData";

test("should add currency to action object", () => {
  const currency = currenciesData[0];
  const action = addCurrency(currency);
  expect(action).toEqual({
    type: ADD_FAV_CURRENCY,
    payload: currency
  });
});

test("should add currencies to action object", () => {
  const action = addCurrencies(currenciesData);
  expect(action).toEqual({
    type: ADD_CURRENCIES,
    payload: currenciesData
  });
});

test("should add code currency to be deleted to action object", () => {
  const code = currenciesData[0].code;
  const action = removeCurrency(code);
  expect(action).toEqual({
    type: REMOVE_CURRENCY,
    payload: code
  });
});

test("should add REMOVE_ALL_CURRENCIES type to action object", () => {
  const action = removeAllCurrencies();
  expect(action).toEqual({
    type: REMOVE_ALL_CURRENCIES
  });
});

// test("should fetch currencies data and pass it to addCurrencies action", () => {
//   fetchMock.mockResponse(JSON.stringify(responseData));
//   const store = mockStore(defaultStore);
//   store.dispatch<any>(fetchCurrencyData()).then(() => {
//     const actions = store.getActions();
//     const expectedActions = [
//       {
//         type: SET_LOADING,
//         payload: true
//       },
//       {
//         type: ADD_CURRENCIES,
//         payload: currenciesData
//       },
//       {
//         type: SET_LOADING,
//         payload: false
//       }
//     ];
//     expect(actions).toEqual(expectedActions);
//   });
// });
