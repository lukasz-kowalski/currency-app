import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ICurrency } from "../types/interfaces/currenciesInterface";
import { RootState } from "../types/interfaces/reducersTypes";
import { fetchCurrencyData } from "../redux/actions/currenciesActions";
import ExchangeList from "../components/ExchangePage/ExchangeList";

const ExchangePage: React.FC = () => {
  const currencies: ICurrency[] = useSelector(
    (state: RootState) => state.currencies.currencies
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (currencies.length < 1) dispatch(fetchCurrencyData());
  }, [dispatch, currencies.length]);

  return (
    <div className="container exchange">
      <ExchangeList currencies={currencies} />
    </div>
  );
};

export default ExchangePage;
