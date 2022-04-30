import { Reducer } from "react"
import { rollThreesAwayD6 } from "../../../helpers/gameUtils"
import { ActionType, DiceActions } from "./actions"
import { Dice as DiceState, Die, DieStatus } from "../types"
import { DIE_1, DIE_2, DIE_3, DIE_4, DIE_5 } from "../../../helpers/constants"

export const initialState: DiceState = {
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

export const diceReducer: Reducer<DiceState, DiceActions> = (
  state = initialState,
  action,
): DiceState => {
  let stateCopy: DiceState

  switch (action.type) {
    case ActionType.RollDie:
      return {
        ...state,
        [action.dieKey]: {
          ...state[action.dieKey],
          value: rollThreesAwayD6(),
        },
      }
    case ActionType.ThawDie:
      return {
        ...state,
        [action.dieKey]: {
          ...state[action.dieKey],
          status: DieStatus.THAWED,
        },
      }
    case ActionType.ChillDie:
      return {
        ...state,
        [action.dieKey]: {
          ...state[action.dieKey],
          status: DieStatus.CHILLED,
        },
      }
    case ActionType.FreezeDie:
      return {
        ...state,
        [action.dieKey]: {
          ...state[action.dieKey],
          status: DieStatus.FROZEN,
        },
      }

    case ActionType.RollDice:
      stateCopy = { ...state }
      stateCopy[DIE_1] = rollByStatus(state[DIE_1])
      stateCopy[DIE_2] = rollByStatus(state[DIE_2])
      stateCopy[DIE_3] = rollByStatus(state[DIE_3])
      stateCopy[DIE_4] = rollByStatus(state[DIE_4])
      stateCopy[DIE_5] = rollByStatus(state[DIE_5])
      return { ...state, ...stateCopy }

    case ActionType.ThawDice:
      stateCopy = { ...state }
      stateCopy[DIE_1].status = DieStatus.THAWED
      stateCopy[DIE_2].status = DieStatus.THAWED
      stateCopy[DIE_3].status = DieStatus.THAWED
      stateCopy[DIE_4].status = DieStatus.THAWED
      stateCopy[DIE_5].status = DieStatus.THAWED
      return { ...state, ...stateCopy }
    default:
      return state
  }
  return state
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
