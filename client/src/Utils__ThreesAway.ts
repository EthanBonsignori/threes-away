import { DieValue } from "./Types__ThreesAway"

/**
 * Returns random DieValue (Random 1-6 where 3s become 0);
 */
export function rollThreesAwayD6(): DieValue {
  let roll = Math.floor(Math.random() * 6) + 1
  if (roll === 3) roll = 0
  return roll as DieValue
}

export const DIE_1 = "DIE_1"
export const DIE_2 = "DIE_2"
export const DIE_3 = "DIE_3"
export const DIE_4 = "DIE_4"
export const DIE_5 = "DIE_5"
export const ALL_DICE = [DIE_1, DIE_2, DIE_3, DIE_4, DIE_5]
