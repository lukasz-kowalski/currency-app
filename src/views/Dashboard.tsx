import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCurrencyData } from "../redux/actions/currenciesActions";
import DashboardLogo from "../components/Dashboard/DashboardLogo";
import DashboardFavList from "../components/Dashboard/DashboardFavList";
import DashboardCurrencies from "../components/Dashboard/DashboardCurrencies";

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrencyData());
  }, [dispatch]);

  return (
    <div className="dashboard">
      <DashboardLogo />
      <DashboardFavList />
      <DashboardCurrencies />
    </div>
  );
};

export default Dashboard;
