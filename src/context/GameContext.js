import { useState, createContext } from 'react';

const GameContext = createContext();
const GameProvider = ({ children }) => {
  const [selectedCard, setSelectedCard] = useState();

  return (
    <GameContext.Provider value={{ selectedCard, setSelectedCard }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
