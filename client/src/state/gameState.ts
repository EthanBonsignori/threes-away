import { Reducer } from "react";
import { rollThreesAwayD6 } from "../helpers/gameUtils";
import { Dice, Die, DieKey, DieStatus, DieValue } from "./Dice/types";

interface GameState {
  dice: Dice
}

export const initialState: GameState = {
  dice: {
    die1: {
      id: DieKey.ONE,
      value: rollThreesAwayD6(),
      status: DieStatus.THAWED,
    },
    die2: {
      id: DieKey.TWO,
      value: rollThreesAwayD6(),
      status: DieStatus.THAWED,
    },
    die3: {
      id: DieKey.THREE,
      value: rollThreesAwayD6(),
      status: DieStatus.THAWED,
    },
    die4: {
      id: DieKey.FOUR,
      value: rollThreesAwayD6(),
      status: DieStatus.THAWED,
    },
    die5: {
      id: DieKey.FIVE,
      value: rollThreesAwayD6(),
      status: DieStatus.THAWED,
    },
  },
}

interface DiceAction {
  type: DiceActionTypes;
  dieKey?: DieKey;
}

export enum DiceActionTypes {
  ROLL_ONE = "ROLL_ONE",
  THAW_ONE = "THAW_ONE",
  CHILL_ONE = "CHILL_ONE",
  FREEZE_ONE = "FREEZE_ONE", ROLL_ALL = "ROLL_ALL",
  THAW_ALL = "THAW_ALL",
}

export const gameReducer: Reducer<GameState, DiceAction> = (
  state = initialState,
  action
): GameState => {
  const type = action.type;
  let diceCopy: GameState["dice"];
  let dieKey: keyof Dice = "die1";
  let roll: DieValue;

  switch (type) {
    case DiceActionTypes.ROLL_ONE:
      if (action?.dieKey) {
        dieKey = action.dieKey;
      } else {
        console.warn("Single die action fired without passing a DieKey");
        return state;
      }
      return {
        ...state,
        dice: {
          ...state.dice,
          [dieKey]: {
            ...state.dice[dieKey],
            value: rollThreesAwayD6(),
          },
        },
      };
    case DiceActionTypes.THAW_ONE:
      if (action?.dieKey) {
        dieKey = action.dieKey;
      } else {
        console.warn("Single die action fired without passing a DieKey");
        return state;
      }
      return {
        ...state,
        dice: {
          ...state.dice,
          [dieKey]: {
            ...state.dice[dieKey],
            status: DieStatus.THAWED,
          },
        },
      };
    case DiceActionTypes.CHILL_ONE:
      if (action?.dieKey) {
        dieKey = action.dieKey;
      } else {
        console.warn("Single die action fired without passing a DieKey");
        return state;
      }
      return {
        ...state,
        dice: {
          ...state.dice,
          [dieKey]: {
            ...state.dice[dieKey],
            status: DieStatus.CHILLED,
          },
        },
      };
    case DiceActionTypes.FREEZE_ONE:
      if (action?.dieKey) {
        dieKey = action.dieKey;
      } else {
        console.warn("Single die action fired without passing a DieKey");
        return state;
      }
      return {
        ...state,
        dice: {
          ...state.dice,
          [dieKey]: {
            ...state.dice[dieKey],
            status: DieStatus.FROZEN,
          },
        },
      };

    case DiceActionTypes.ROLL_ALL:
      diceCopy = { ...state.dice };
      for (dieKey in diceCopy) {
        switch (diceCopy[dieKey].status) {
          case DieStatus.CHILLED:
            diceCopy[dieKey].status = DieStatus.FROZEN;
            break;
          case DieStatus.THAWED:
            roll = rollThreesAwayD6();
            if (roll === 0) {
              diceCopy[dieKey].status = DieStatus.FROZEN;
            }
            diceCopy[dieKey].value = roll;
            break;
          case DieStatus.FROZEN:
          default:
            break;
        }
      }
      return { ...state, dice: { ...diceCopy } };
    case DiceActionTypes.THAW_ALL:
      diceCopy = { ...state.dice };
      for (dieKey in diceCopy) {
        diceCopy[dieKey].status = DieStatus.THAWED;
      }
      return { ...state, dice: { ...diceCopy } };
    default:
      return state;
  }
};
