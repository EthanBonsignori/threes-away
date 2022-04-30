import { createContext, Dispatch } from "react"
import { DiceActions } from "./actions"
import { initialState } from "./reducer"
import { Dice } from "../types"

interface DiceContext {
  state: Dice
  dispatch: Dispatch<DiceActions>
}

export default createContext<DiceContext>({
  state: initialState,
  dispatch: () => void 0,
})
