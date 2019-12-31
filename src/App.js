import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import CardComponent from './components/card';
import Coin from './components/coin/index';
import './App.scss';

import deckImage from './images/deck.png';
import card from './images/AS.png';

const App = () => {
  const [userCard, setUserCards] = useState([1, 1]);
  const [dealerCard, setDealerCards] = useState([1, 1]);
  const [end, setEnd] = useState(false);
  return (
    <div className="bj-board">
      <div className="deck-provider">
        <img src={deckImage} alt="" />
      </div>
      {dealerCard.map((card, idx) => (
        <CardComponent key={idx} shift={idx} end={end} cardFor="dealer" />
      ))}
      {userCard.map((card, idx) => (
        <CardComponent key={idx} shift={idx} end={end} cardFor="user" />
      ))}
      <div className="deck-collector">
        <img src={deckImage} alt="" />
      </div>
      <div className="bj-actions">
        <Coin value="10" />
        <Coin value="20" />
        <Coin value="30" />
        <Coin value="40" />
        <Coin value="50" />
        <button
          onClick={() => {
            setUserCards(userCard.concat([1]));
            setDealerCards(dealerCard.concat([1]));
            setEnd(false);
          }}
        >
          Hit
        </button>
        <button
          onClick={() => {
            setEnd(true);
            setTimeout(() => {
              setUserCards([]);
              setDealerCards([]);
            }, 300);
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default App;
