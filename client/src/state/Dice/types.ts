export type DieValue = 1 | 2 | 0 | 4 | 5 | 6;

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
  value: DieValue;
  status: DieStatus;
}

export interface Dice {
  die1: Die,
  die2: Die,
  die3: Die,
  die4: Die,
  die5: Die,
}
