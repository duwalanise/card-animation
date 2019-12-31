import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import card from '../../images/AS.png';

const Card = ({ shift, end, cardFor }) => {
  const { xys } = useSpring({
    from: { xys: [0, 0, 1] },
    xys: end ? [-85, 0, 1] : [-50 + shift, cardFor === 'dealer' ? 10 : 60, 1],
  });
  return (
    <animated.div
      className="deck-cards"
      style={{
        transform: xys.interpolate(
          (x, y, s) => `translate(${x}vw, ${y}vh) scale(${s})`,
        ),
      }}
    >
      <img src={card} alt="" />
    </animated.div>
  );
};

export default Card;
