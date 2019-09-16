import transition from 'styled-transition-group'

const BooleanDrower = transition.div`
  width: 300px;
  height: 400px;
  background-color: #3f3f3f;
  text-align: center;
  font-size: 30px;

  &:enter {
    opacity: 0.01;
  }
  &:enter-active {
    opacity: 1;
    transition: opacity 1000ms ease-in;
  }
  &:exit {
    opacity: 1;
  }
  &:exit-active {
    opacity: 0.01;
    transition: opacity 800ms ease-in;
  }
`

export default BooleanDrower