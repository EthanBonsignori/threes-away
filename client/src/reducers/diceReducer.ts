import { Reducer } from "react";

export enum DieStatus {
  /**
   * Ready to roll
   */
  THAWED = "THAWED",
  /**
   * Frozen this round via click and can be thawed
   */
  CHILLED = "CHILLED",
  /**
   * Frozen in a previous round or a 3 and cannot be thawed
   */
  FROZEN = "FROZEN",
}

export enum DieKey {
  ONE = "die1",
  TWO = "die2",
  THREE = "die3",
  FOUR = "die4",
  FIVE = "die5",
}

export interface Die {
  id: DieKey;
  value: 1 | 2 | 3 | 4 | 5 | 6;
  status: DieStatus;
}

export type InitialDiceState = { dice: Record<string, Die> };

export const initialState: InitialDiceState = {
  dice: {
    die1: {
      id: DieKey.ONE,
      value: 1,
      status: DieStatus.THAWED,
    },
    die2: {
      id: DieKey.TWO,
      value: 1,
      status: DieStatus.THAWED,
    },
    die3: {
      id: DieKey.THREE,
      value: 1,
      status: DieStatus.THAWED,
    },
    die4: {
      id: DieKey.FOUR,
      value: 1,
      status: DieStatus.THAWED,
    },
    die5: {
      id: DieKey.FIVE,
      value: 1,
      status: DieStatus.THAWED,
    },
  },
};

export enum DiceActionTypes {
  ROLL_ONE = "ROLL_ONE",
  THAW_ONE = "THAW_ONE",
  CHILL_ONE = "CHILL_ONE",
  FREEZE_ONE = "FREEZE_ONE",
  ROLL_ALL = "ROLL_ALL",
  THAW_ALL = "THAW_ALL",
}

export interface DiceAction {
  type: DiceActionTypes;
  dieKey?: DieKey;
}

const rollD6 = () => (Math.floor(Math.random() * 6) + 1) as Die["value"];

export const dieReducer: Reducer<InitialDiceState, DiceAction> = (
  state,
  action
) => {
  const dieKey = action?.dieKey ?? "";
  const type = action.type;
  let diceCopy = { ...state.dice };
  let roll;

  switch (type) {
    case DiceActionTypes.ROLL_ONE:
      return {
        ...state,
        dice: {
          ...state.dice,
          [dieKey]: {
            ...state.dice[dieKey],
            value: rollD6(),
          },
        },
      };
    case DiceActionTypes.THAW_ONE:
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
      Object.keys(diceCopy).forEach((key) => {
        switch (diceCopy[key].status) {
          case DieStatus.CHILLED:
            diceCopy[key].status = DieStatus.FROZEN;
            return;
          case DieStatus.THAWED:
            roll = rollD6();
            if (roll === 3) {
              diceCopy[key].status = DieStatus.FROZEN;
            }
            diceCopy[key].value = roll;
            return;
          case DieStatus.FROZEN:
          default:
            return;
        }
      });
      return { ...state, dice: { ...diceCopy } };
    case DiceActionTypes.THAW_ALL:
      diceCopy = { ...state.dice };
      Object.keys(diceCopy).forEach((key) => {
        diceCopy[key].status = DieStatus.THAWED;
      });
      return { ...state, dice: { ...diceCopy } };
    default:
      return state;
  }
};
