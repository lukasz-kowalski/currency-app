import React from "react";

import { ICurrency } from "../../types/interfaces/currenciesInterface";

interface IProps {
  data: string | ICurrency;
  label: string;
  handleClick: (data: any) => void;
  name: string;
  code: string;
  exchangeRate: number;
  active?: boolean;
}

const ListItem: React.FC<IProps> = ({
  label,
  handleClick,
  name,
  code,
  exchangeRate,
  data,
  active
}) => {
  const handleButtonClick = () => handleClick(data);

  return (
    <div className="list-item">
      <div>{name}</div>
      <div>
        {code} {exchangeRate}
      </div>
      <button onClick={handleButtonClick} disabled={active}>
        {label}
      </button>
    </div>
  );
};

export default ListItem;
