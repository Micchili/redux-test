import * as React from 'react'
import { HeaderComponet , P } from '../styles/components/Header';

export const Header :React.FC = () => {
  return (
    <HeaderComponet>
      <h1>React Hooks + Redux</h1>
      <P>ContextとRedux</P>
    </HeaderComponet>
  )
}