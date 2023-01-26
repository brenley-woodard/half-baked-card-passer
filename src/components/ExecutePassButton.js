import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import Card from './Card';

export default function ExecutePassButton({
  passCard,
  from,
  selectedCard,
}) {
  const { to } = useContext(GameContext);
  return (
    <div className="execute-button" onClick={() => passCard(selectedCard)}>
      Pass <Card card={selectedCard} /> from{' '}
      {from} to {to}
    </div>
  );
}
