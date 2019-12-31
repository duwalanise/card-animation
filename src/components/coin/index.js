import React from 'react';

import './style.scss';

const Coin = ({ value }) => (
  <div className="coin">
    <div className={`front _${value}`}>
      <div className="outer"></div>
      <div className="inner">{value}</div>
    </div>
  </div>
);

export default Coin;
