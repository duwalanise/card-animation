import React from 'react';

import './style.scss';

const Actions = ({
  hasStarted,
  hasEnded,
  onHit,
  onDouble,
  onStand,
  onDeal,
  onBet,
  onRebet,
  onClear,
}) => {
  if (hasStarted) {
    return (
      <div className="actions-wrapper">
        <span role="img" onClick={onHit} aria-label="Hit">
          <span className="inner">+</span>
        </span>
        <span role="img" onClick={onStand} aria-label="Stand">
          <span className="inner">&#9995;</span>
        </span>
        <span role="img" onClick={onDouble} aria-label="Double">
          <span className="inner">x2</span>
        </span>
      </div>
    );
  }
  if (hasEnded) {
    return (
      <div className="actions-wrapper">
        <span role="img" onClick={onBet} aria-label="New Bet">
          <span className="inner">+</span>
        </span>
        <span role="img" onClick={onRebet} aria-label="Rebet">
          <span className="inner">&#8634;</span>
        </span>
      </div>
    );
  }
  return (
    <div className="actions-wrapper">
      <span role="img" onClick={onDeal} aria-label="Deal">
        <span className="inner">$</span>
      </span>
      <span role="img" onClick={onClear} aria-label="Deal">
        <span className="inner">X</span>
      </span>
    </div>
  );
};

export default Actions;
