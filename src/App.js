import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import CardComponent from './components/card';
import './App.scss';

import deckImage from './images/deck.png';
import card from './images/AS.png';

const App = () => {
  const [cards, setCards] = useState([]);
  const [end, setEnd] = useState(false);
  return (
    <div className="bj-board">
      <div className="deck-provider">
        <img src={deckImage} alt="" />
      </div>
      {cards.map((card, idx) => (
        <CardComponent key={idx} shift={idx} end={end} />
      ))}
      <div className="deck-collector">
        <img src={deckImage} alt="" />
      </div>
      <div className="bj-actions">
        <button
          onClick={() => {
            setCards(cards.concat([1]));
            setEnd(false);
          }}
        >
          Hit
        </button>
        <button
          onClick={() => {
            setEnd(true);
            setTimeout(() => {
              setCards([]);
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
