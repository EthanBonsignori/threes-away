import { useReducer } from "react";
import { Die, DieStatus } from "../state/Dice/types";
import styled from "styled-components";
import { gameReducer, initialState, DiceActionTypes } from "../state/gameState";
import Game from "./Game/Game";

const App = () => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const onClickDie = (die: Die) => {
    if (die.value === 0) {
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
        <Game
          dice={state.dice}
          onClickDie={onClickDie}
          onClickRoll={onClickRoll}
        />
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

export default App;
