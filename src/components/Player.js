import React from 'react';
import CardList from './CardList';

export default function Player({
  player,
  setTo,
  hand,
  to,
}) {
  return (
    <div
      className={`player ${to === player ? 'selected-player' : ''}`}
      onClick={() => setTo(player)}
    >
      <p>Player {player}</p>
      <CardList
        player={player}
        cards={hand}
      />
    </div>
  );
}
