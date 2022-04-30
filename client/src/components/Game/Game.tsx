import { FC } from "react";
import styled from "styled-components";
import { DIE_VALUE_DICT } from "../../helpers/constants";
import { Dice, Die, DieStatus } from "../../state/Dice/types";

interface GameProps {
  dice: Dice,
  onClickDie: (die: Die) => void;
  onClickRoll: () => void;
}

const Game: FC<GameProps> = ({  dice, onClickDie, onClickRoll }) => {
  const {die1, die2, die3, die4, die5} = dice;
  return (
    <DieWrapper>
      <DieTotal>
        {die1.value + die2.value + die3.value + die4.value + die5.value}
      </DieTotal>
      <DieElement
        key={die1.id}
        status={die1.status}
        onClick={() => onClickDie(die1)}
      >
        {DIE_VALUE_DICT[die1.value]}
      </DieElement>
      <DieElement
        key={die2.id}
        status={die2.status}
        onClick={() => onClickDie(die2)}
      >
        {DIE_VALUE_DICT[die2.value]}
      </DieElement>
      <DieElement
        key={die3.id}
        status={die3.status}
        onClick={() => onClickDie(die3)}
      >
        {DIE_VALUE_DICT[die3.value]}
      </DieElement>
      <DieElement
        key={die4.id}
        status={die4.status}
        onClick={() => onClickDie(die4)}
      >
        {DIE_VALUE_DICT[die4.value]}
      </DieElement>
      <DieElement
        key={die5.id}
        status={die5.status}
        onClick={() => onClickDie(die5)}
      >
        {DIE_VALUE_DICT[die5.value]}
      </DieElement>
      <RollButton onClick={onClickRoll}>Roll</RollButton>
    </DieWrapper>
  );
};

const DieWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
`;

interface DieElementProps {
  status: DieStatus;
}

const DieElement = styled.div<DieElementProps>`
  width: 100px;
  height: 100px;
  background: ${(props) => {
    switch (props.status) {
      case DieStatus.FROZEN:
        return "aqua";
      case DieStatus.CHILLED:
        return "orange";
      case DieStatus.THAWED:
      default:
        return "red";
    }
  }};
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

export default Game;
