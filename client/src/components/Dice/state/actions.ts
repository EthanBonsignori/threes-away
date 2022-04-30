import { Dice } from "../types"

export enum ActionType {
  ClickDie,
  RollDie,
  ThawDie,
  ChillDie,
  FreezeDie,
  RollDice,
  ThawDice,
}

export interface ClickDie {
  type: ActionType.ClickDie
  dieKey: keyof Dice
}

export interface RollDie {
  type: ActionType.RollDie
  dieKey: keyof Dice
}

interface ThawDie {
  type: ActionType.ThawDie
  dieKey: keyof Dice
}

interface ChillDie {
  type: ActionType.ChillDie
  dieKey: keyof Dice
}

interface FreezeDie {
  type: ActionType.FreezeDie
  dieKey: keyof Dice
}

interface RollDice {
  type: ActionType.RollDice
}

interface ThawDice {
  type: ActionType.ThawDice
}

export type DiceActions =
  | ClickDie
  | RollDie
  | ThawDie
  | ChillDie
  | FreezeDie
  | RollDice
  | ThawDice

/**
 * Action Helpers
 */
export const clickDie = (dieKey: keyof Dice): ClickDie => ({
  type: ActionType.ClickDie,
  dieKey,
})

export const rollDie = (dieKey: keyof Dice): RollDie => ({
  type: ActionType.RollDie,
  dieKey,
})

export const thawDie = (dieKey: keyof Dice): ThawDie => ({
  type: ActionType.ThawDie,
  dieKey,
})

export const chillDie = (dieKey: keyof Dice): ChillDie => ({
  type: ActionType.ChillDie,
  dieKey,
})

export const freezeDie = (dieKey: keyof Dice): FreezeDie => ({
  type: ActionType.FreezeDie,
  dieKey,
})

export const rollDice = (): RollDice => ({ type: ActionType.RollDice })

export const thawDice = (): ThawDice => ({ type: ActionType.ThawDice })
