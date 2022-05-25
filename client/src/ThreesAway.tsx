import { FC, useContext } from "react"
import styled from "styled-components"
import DiceContext from "./Context__ThreesAway"
import { chillDie, rollDice, thawDie } from "./Actions__ThreesAway"
import { Die, DieStatus } from "./Types__ThreesAway"

const Dice: FC = () => {
  const { state, dispatch } = useContext(DiceContext)
  const { DIE_1, DIE_2, DIE_3, DIE_4, DIE_5 } = state.dice

  const onClick = (die: Die) => {
    // If roll is 3 (value of 0) it's already frozen
    if (die.value === 0) {
      return null
    }

    switch (die.status) {
      case DieStatus.CHILLED:
        // TODO: Dispatch game action, die has been chilled
        dispatch(thawDie(die.id))
        break
      case DieStatus.THAWED:
        // TODO: Dispatch game action, die has been thawed
        dispatch(chillDie(die.id))
        break
      case DieStatus.FROZEN:
      default:
        break
    }
  }

  return (
    <DieWrapper>
      <DieTotal>
        {DIE_1.value + DIE_2.value + DIE_3.value + DIE_4.value + DIE_5.value}
      </DieTotal>
      <DieElement
        key={Object.keys(state)[1]}
        status={DIE_1.status}
        onClick={() => onClick(DIE_1)}>
        {DIE_1.value === 0 ? 3 : DIE_1.value}
      </DieElement>
      <DieElement
        key={Object.keys(state)[2]}
        status={DIE_2.status}
        onClick={() => onClick(DIE_2)}>
        {DIE_2.value === 0 ? 3 : DIE_2.value}
      </DieElement>
      <DieElement
        key={Object.keys(state)[3]}
        status={DIE_3.status}
        onClick={() => onClick(DIE_3)}>
        {DIE_3.value === 0 ? 3 : DIE_3.value}
      </DieElement>
      <DieElement
        key={Object.keys(state)[4]}
        status={DIE_4.status}
        onClick={() => onClick(DIE_4)}>
        {DIE_4.value === 0 ? 3 : DIE_4.value}
      </DieElement>
      <DieElement
        key={Object.keys(state)[5]}
        status={DIE_5.status}
        onClick={() => onClick(DIE_5)}>
        {DIE_5.value === 0 ? 3 : DIE_5.value}
      </DieElement>
      <RollButton onClick={() => dispatch(rollDice())}>Roll</RollButton>
    </DieWrapper>
  )
}

const DieWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
`

const DieElement = styled.div<{ status: DieStatus }>`
  width: 100px;
  height: 100px;
  background: ${props => {
    switch (props.status) {
      case DieStatus.FROZEN:
        return "aqua"
      case DieStatus.CHILLED:
        return "orange"
      case DieStatus.THAWED:
      default:
        return "red"
    }
  }};
  color: white;
  font-size: 2em;
  display: grid;
  place-items: center;
`

const DieTotal = styled.div`
  grid-row: 1;
  grid-column: 1/6;
`

const RollButton = styled.button`
  grid-column: 2/5;
  height: 50px;
`

export default Dice
