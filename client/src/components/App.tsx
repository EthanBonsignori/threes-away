import { FC, useEffect, useState } from "react";
import styled from "styled-components";

type Die = {
  id: number;
  roll: number;
};

const rollD6 = () => Math.floor(Math.random() * 6) + 1;

const initialDice = [
  { id: 0, roll: rollD6() },
  { id: 1, roll: rollD6() },
  { id: 2, roll: rollD6() },
  { id: 3, roll: rollD6() },
  { id: 4, roll: rollD6() },
];

const App: FC = () => {
  const [dice, setDice] = useState<Die[]>(initialDice);
  const [frozenDice, setFrozenDice] = useState<Die[]>([]);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    let dieScore = 0;
    let dieToFreeze: Die[] = [];
    dice.forEach((die) => {
      if (die.roll !== 3) {
        dieScore += die.roll;
      } else {
        dieToFreeze.push(die);
      }
    });
    setScore(dieScore);
    setFrozenDice(dieToFreeze);
  }, [dice]);

  const onClickRoll = () => {
    const availableDice = dice
      .filter((die) => !frozenDice.some((frozenDie) => frozenDie.id === die.id))
      .map((die) => ({ ...die, roll: rollD6() }));
    setDice([...frozenDice, ...availableDice]);
  };

  return (
    <div className="App">
      <header className="App-header">Threes Away</header>
      <FlexWrapper>
        <DieWrapper>
          <DieTotal>{score}</DieTotal>
          {dice.map((die: Die) => (
            <DieElement key={die.id}>{die.roll}</DieElement>
          ))}
          <RollButton onClick={onClickRoll}>Roll</RollButton>
        </DieWrapper>
      </FlexWrapper>
    </div>
  );
};

const FlexWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  place-items: center;
  justify-content: center;
`;

const DieWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
`;

const DieElement = styled.div`
  width: 100px;
  height: 100px;
  background: red;
  color: white;
  font-size: 2em;
  display: grid;
  place-items: center;
`;

const DieTotal = styled.div`
  grid-row: 1;
  grid-column: 1/6;
`;

const RollButton = styled.button`
  grid-column: 2/5;
  height: 50px;
`;

export default App;