import * as React from 'react'
import { P } from '../styles/components/Header'
import { NambarContext } from '../App'

export const NambarUpDownButton: React.FC = () => {
  const nambar = React.useContext(NambarContext)

  // 初期値にContextをを使う事で劣化Reduxみたいに使える
  const [sum, dispatch] = React.useReducer((nambar, action) => {
    return nambar + action
  }, nambar)

  return (
    <>
      {console.log(sum)}
      <P>{sum}</P>
      {/* dispatchの引数がアクションになっている */}
      <button onClick = {() => dispatch(1)}>+</button>
      <button onClick = {() => dispatch(-1)}>-</button>
    </>
  )
}