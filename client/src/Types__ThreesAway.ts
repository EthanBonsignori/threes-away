import { ActionType as ThreesAwayActions } from "./Actions__ThreesAway"
import { DIE_1, DIE_2, DIE_3, DIE_4, DIE_5 } from "./Utils__ThreesAway"

/**
 * Value of die's roll (0-6 excluding 3)
 */
export type DieValue = 1 | 2 | 0 | 4 | 5 | 6

/*
 * Die's game state
 */
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

/**
 * A single die
 */
export interface Die {
  id: keyof Dice
  value: DieValue
  status: DieStatus
}

/**
 * All five dice
 */
export interface Dice {
  [DIE_1]: Die
  [DIE_2]: Die
  [DIE_3]: Die
  [DIE_4]: Die
  [DIE_5]: Die
}

export type RoundEvents = ThreesAwayActions

export interface Round {
  canRoll: boolean
  events: RoundEvents[]
  score: number | null
}

export interface GameState {
  round: Round
  dice: Dice
}
