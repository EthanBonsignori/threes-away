import { useReducer } from "react";
import styled from "styled-components";
import {
  DiceActionTypes,
  Die,
  dieReducer,
  DieStatus,
  initialState,
} from "../reducers/diceReducer";

const App = () => {
  const [state, dispatch] = useReducer(dieReducer, initialState);
  const { die1, die2, die3, die4, die5 } = state.dice;

  const onClickDie = (die: Die) => {
    if (die.value === 3) {
      return;
    }

    switch (die.status) {
      case DieStatus.THAWED:
        return dispatch({
          type: DiceActionTypes.CHILL_ONE,
          dieKey: die.id,
        });
      case DieStatus.CHILLED:
        return dispatch({
          type: DiceActionTypes.THAW_ONE,
          dieKey: die.id,
        });
      case DieStatus.FROZEN:
      default:
        return;
    }
  };

  const onClickRoll = () => dispatch({ type: DiceActionTypes.ROLL_ALL });

  return (
    <AppContainer>
      <Nav>
        <Header>Threes Away</Header>
      </Nav>
      <FlexWrapper>
        <DieWrapper>
          <DieTotal>
            {die1.value + die2.value + die3.value + die4.value + die5.value}
          </DieTotal>
          <DieElement
            key={die1.id}
            status={die1.status}
            onClick={() => onClickDie(die1)}
          >
            {die1.value}
          </DieElement>
          <DieElement
            key={die2.id}
            status={die2.status}
            onClick={() => onClickDie(die2)}
          >
            {die2.value}
          </DieElement>
          <DieElement
            key={die3.id}
            status={die3.status}
            onClick={() => onClickDie(die3)}
          >
            {die3.value}
          </DieElement>
          <DieElement
            key={die4.id}
            status={die4.status}
            onClick={() => onClickDie(die4)}
          >
            {die4.value}
          </DieElement>
          <DieElement
            key={die5.id}
            status={die5.status}
            onClick={() => onClickDie(die5)}
          >
            {die5.value}
          </DieElement>
          <RollButton onClick={onClickRoll}>Roll</RollButton>
        </DieWrapper>
      </FlexWrapper>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Nav = styled.nav`
  padding: 2em;
  background-color: grey;
  display: flex;
  justify-content: center;
`;

const Header = styled.header`
  font-size: 2em;
  color: white;
`;

const FlexWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  place-items: center;
  justify-content: center;
`;

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

export default App;
