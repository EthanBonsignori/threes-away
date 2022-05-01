import { Reducer } from "react"

export interface GameState {
  // players: undefined,
  round: {
    activePlayer: {
      // id: number,
      dieFrozen: number
      diceTally: number
    }
    lowScore: number
    number: number
  }
  // options: undefined,
}

export const initialState: GameState = {
  // players: undefined,
  round: {
    activePlayer: {
      // id: number,
      dieFrozen: 0,
      diceTally: 0,
    },
    lowScore: 0,
    number: 0,
  },
}

export const gameReducer: Reducer<GameState, null> = (
  state = initialState,
  action,
): GameState => {
  return initialState
}
