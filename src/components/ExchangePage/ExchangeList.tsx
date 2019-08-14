import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ICurrency } from "../../types/interfaces/currenciesInterface";
import { RootState } from "../../types/interfaces/reducersTypes";
import { addCurrency } from "../../redux/actions/currenciesActions";
import ListItem from "../ui/ListItem";
import Loader from "../ui/Loader/Loader";

interface IProps {
  currencies: ICurrency[];
}

const DashboardCurrencies: React.FC<IProps> = ({ currencies }) => {
  const favCurrencies: ICurrency[] = useSelector(
    (state: RootState) => state.currencies.favCurrencies
  );

  const loading: boolean = useSelector(
    (state: RootState) => state.loaders.appLoading
  );

  const dispatch = useDispatch();

  const addCurrencyToFav = (currency: ICurrency) => {
    dispatch(addCurrency(currency));
  };

  return (
    <div className="exchange-list">
      {loading ? (
        <Loader />
      ) : (
        <>
          <h2>Current exchange rate</h2>
          {currencies.map(
            (currency: ICurrency): JSX.Element => {
              const active: boolean = favCurrencies.includes(currency);

              return (
                <ListItem
                  key={currency.code}
                  name={currency.currency}
                  code={currency.code}
                  exchangeRate={currency.mid}
                  label="Add to favorites"
                  handleClick={addCurrencyToFav}
                  data={currency}
                  active={active}
                  btnClass="btn--green"
                />
              );
            }
          )}
        </>
      )}
    </div>
  );
};

export default DashboardCurrencies;
