import { useReducer } from "react"
import styled from "styled-components"

import ThreesAway from "./ThreesAway"
import DiceContext from "./Context__ThreesAway"
import {
  gameReducer,
  initialState as initialDiceState,
} from "./Reducer__ThreesAway"

const App = () => {
  const [diceState, diceDispatch] = useReducer(gameReducer, initialDiceState)

  return (
    <DiceContext.Provider
      value={{ state: { ...diceState }, dispatch: diceDispatch }}>
      <AppContainer>
        <Nav>
          <Header>Threes Away</Header>
        </Nav>
        <FlexWrapper>
          <ThreesAway />
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
