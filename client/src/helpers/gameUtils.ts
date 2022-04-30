import { DieValue } from "../components/Dice/types"

/**
 * Returns random DieValue (Random 1-6 where 3s become 0);
 */
export function rollThreesAwayD6(): DieValue {
  let roll = Math.floor(Math.random() * 6) + 1
  if (roll === 3) roll = 0
  return roll as DieValue
}
