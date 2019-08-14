import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ICurrency } from "../../types/interfaces/currenciesInterface";
import {
  removeCurrency,
  removeAllCurrencies
} from "../../redux/actions/currenciesActions";
import ListItem from "../ui/ListItem";

const DashboardFavList: React.FC = () => {
  const favCurrencies: ICurrency[] = useSelector(
    (state: any) => state.currencies.favCurrencies
  );

  const dispatch = useDispatch();

  const removeCurrencyFromFav = (code: string) =>
    dispatch(removeCurrency(code));

  const removeAllCurrenciesFromFav = () => dispatch(removeAllCurrencies());

  if (favCurrencies.length < 1) {
    return (
      <div className="fav-list">
        You don't have any favorite currency. Please go to{" "}
        <Link to="/exchange">exchange page</Link> and add some.
      </div>
    );
  }

  return (
    <div className="fav-list">
      <h2>Currencies followed by you</h2>
      {favCurrencies.map((currency: ICurrency) => (
        <ListItem
          key={currency.code}
          name={currency.currency}
          code={currency.code}
          exchangeRate={currency.mid}
          label="Remove from favorites"
          handleClick={removeCurrencyFromFav}
          data={currency.code}
          btnClass="btn--red"
        />
      ))}
      <div>
        <button onClick={removeAllCurrenciesFromFav} className="btn btn--red">
          Remove all
        </button>
      </div>
    </div>
  );
};

export default DashboardFavList;
