import { Reducer } from "react"
import { ActionType, DiceActions } from "./Actions__ThreesAway"
import { GameState, Dice, Die, DieStatus, Round } from "./Types__ThreesAway"
import {
  rollThreesAwayD6,
  DIE_1,
  DIE_2,
  DIE_3,
  DIE_4,
  DIE_5,
} from "./Utils__ThreesAway"

const initialRoundState: Round = {
  canRoll: false,
  events: [],
  score: null,
}

const initialDiceState: Dice = {
  [DIE_1]: {
    id: DIE_1,
    status: DieStatus.THAWED,
    value: rollThreesAwayD6(),
  },
  [DIE_2]: {
    id: DIE_2,
    status: DieStatus.THAWED,
    value: rollThreesAwayD6(),
  },
  [DIE_3]: {
    id: DIE_3,
    status: DieStatus.THAWED,
    value: rollThreesAwayD6(),
  },
  [DIE_4]: {
    id: DIE_4,
    status: DieStatus.THAWED,
    value: rollThreesAwayD6(),
  },
  [DIE_5]: {
    id: DIE_5,
    status: DieStatus.THAWED,
    value: rollThreesAwayD6(),
  },
}

export const initialState: GameState = {
  round: initialRoundState,
  dice: initialDiceState,
}

export const gameReducer: Reducer<GameState, DiceActions> = (
  state = initialState,
  action,
): GameState => {
  let nextDiceState: GameState["dice"]
  const events: Round["events"] = [...state.round.events]

  switch (action.type) {
    case ActionType.RollDie:
      events.push(ActionType.RollDice)
      return {
        ...state,
        round: {
          ...state.round,
          events,
        },
        dice: {
          ...state.dice,
          [action.dieKey]: {
            ...state.dice[action.dieKey],
            value: rollThreesAwayD6(),
          },
        },
      }
    case ActionType.ThawDie:
      events.push(ActionType.ThawDie)
      return {
        ...state,
        round: {
          ...state.round,
          events,
        },
        dice: {
          ...state.dice,
          [action.dieKey]: {
            ...state.dice[action.dieKey],
            status: DieStatus.THAWED,
          },
        },
      }
    case ActionType.ChillDie:
      events.push(ActionType.ChillDie)
      return {
        ...state,
        round: {
          ...state.round,
        },
        dice: {
          ...state.dice,
          [action.dieKey]: {
            ...state.dice[action.dieKey],
            status: DieStatus.CHILLED,
          },
        },
      }
    case ActionType.FreezeDie:
      events.push(ActionType.FreezeDie)
      return {
        ...state,
        dice: {
          ...state.dice,
          [action.dieKey]: {
            ...state.dice[action.dieKey],
            status: DieStatus.FROZEN,
          },
        },
      }
    case ActionType.RollDice:
      events.push(ActionType.RollDice)
      nextDiceState = { ...state.dice }
      nextDiceState[DIE_1] = rollByStatus(state.dice[DIE_1])
      nextDiceState[DIE_2] = rollByStatus(state.dice[DIE_2])
      nextDiceState[DIE_3] = rollByStatus(state.dice[DIE_3])
      nextDiceState[DIE_4] = rollByStatus(state.dice[DIE_4])
      nextDiceState[DIE_5] = rollByStatus(state.dice[DIE_5])
      return { ...state, dice: { ...nextDiceState } }
    case ActionType.ThawDice:
      events.push(ActionType.ThawDice)
      nextDiceState = { ...state.dice }
      nextDiceState[DIE_1].status = DieStatus.THAWED
      nextDiceState[DIE_2].status = DieStatus.THAWED
      nextDiceState[DIE_3].status = DieStatus.THAWED
      nextDiceState[DIE_4].status = DieStatus.THAWED
      nextDiceState[DIE_5].status = DieStatus.THAWED
      return { ...state, dice: { ...nextDiceState } }
    default:
      return state
  }
}

const rollByStatus = (die: Die) => {
  switch (die.status) {
    case DieStatus.CHILLED:
      die.status = DieStatus.FROZEN
      break
    case DieStatus.THAWED:
      die.value = rollThreesAwayD6()
      if (die.value === 0) {
        die.status = DieStatus.FROZEN
      }
      break
    case DieStatus.FROZEN:
    default:
      return die
  }
  return die
}
