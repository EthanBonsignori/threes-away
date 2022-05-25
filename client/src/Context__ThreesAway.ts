import { createContext, Dispatch } from "react"
import { DiceActions } from "./Actions__ThreesAway"
import { initialState } from "./Reducer__ThreesAway"
import { GameState } from "./Types__ThreesAway"

interface ThreesAwayContext {
  state: GameState
  dispatch: Dispatch<DiceActions>
}

export default createContext<ThreesAwayContext>({
  state: initialState,
  dispatch: () => void 0,
})
