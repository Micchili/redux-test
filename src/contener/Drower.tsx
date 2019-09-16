import * as React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import BooleanDrower from '../styles/Drower'
import { Drower } from '../types'

const ClickDrower: React.FC = () => {
  const openSelecter = (state: Drower) => state.isOpen
  const open = useSelector(openSelecter)
  const dispatch = useDispatch();
  return (
    <div>
      {console.log(open)}
      <button onClick={() => dispatch({type: 'OPEN'})}>Open</button>
      <button onClick={() => dispatch({type: 'CLOSE'})}>Close</button>
      <BooleanDrower
        unmountOnExit in={open}
        timeout={300}
      >
        AIUEO
      </BooleanDrower>
    </div>
  )
}

export default ClickDrower;