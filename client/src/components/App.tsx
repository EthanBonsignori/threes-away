import { useReducer } from "react"
import styled from "styled-components"

import Dice from "./Dice/Dice"
import DiceContext from "./Dice/state/context"
import {
  diceReducer,
  initialState as initialDiceState,
} from "./Dice/state/reducer"

const App = () => {
  const [state, dispatch] = useReducer(diceReducer, initialDiceState)

  return (
    <DiceContext.Provider value={{ state, dispatch }}>
      <AppContainer>
        <Nav>
          <Header>Threes Away</Header>
        </Nav>
        <FlexWrapper>
          <Dice />
        </FlexWrapper>
      </AppContainer>
    </DiceContext.Provider>
  )
}

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

const Nav = styled.nav`
  padding: 2em;
  background-color: grey;
  display: flex;
  justify-content: center;
`

const Header = styled.header`
  font-size: 2em;
  color: white;
`

const FlexWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  place-items: center;
  justify-content: center;
`

export default App
