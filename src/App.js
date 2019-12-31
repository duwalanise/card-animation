import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import CardComponent from './components/card/index';
import Coin from './components/coin/index';
import './App.scss';

import deckImage from './images/deck.png';
import Actions from './components/actions';
import IconLogo from './images/icon_logo.svg';

const App = () => {
  const [userCard, setUserCards] = useState([1, 1]);
  const [dealerCard, setDealerCards] = useState([1, 1]);
  const [end, setEnd] = useState(false);
  return (
    <div className="bj-board">
      <div className="bj-image">
        <div className="deck-provider">
          <img src={deckImage} alt="" />
        </div>
        <img className="icon-logo" src={IconLogo} alt="" />
        {dealerCard.map((card, idx) => (
          <CardComponent key={idx} shift={idx * 2} end={end} cardFor="dealer" />
        ))}
        {userCard.map((card, idx) => (
          <CardComponent key={idx} shift={idx * 2} end={end} cardFor="user" />
        ))}
        <div className="deck-collector">
          <img src={deckImage} alt="" />
        </div>
        <div className="coin-wrapper">
          <Coin value="10" />
          <Coin value="20" />
          <Coin value="30" />
          <Coin value="40" />
          <Coin value="50" />
        </div>
        <Actions
          onDeal={() => {
            setEnd(false);
            setUserCards(userCard.concat(1));
          }}
          onClear={() => {
            setEnd(true);
            setTimeout(() => {
              setUserCards([]);
              setDealerCards([]);
            }, 300);
          }}
        />
      </div>
    </div>
  );
};

export default App;
