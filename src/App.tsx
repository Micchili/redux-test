import React, { createContext } from 'react';
import * as Styled from './styles/App.Styles'
import { Header } from './components/Header'
import { Provider } from 'react-redux';
import ClickDrower from './contener/Drower';
import { NambarUpDownButton } from './components/NambarUpDuwnButton';
import { createStore } from 'redux';
import isOpenDrower from './booleanIsOpen';

const store = createStore(isOpenDrower)

export const NambarContext = createContext(0);
const App: React.FC = () => {
  return (
    <>
    <NambarContext.Provider value={0}>
      <Provider store={store}>
        <Styled.Global />
        <Header />
        <NambarUpDownButton />
        <ClickDrower />
      </Provider>
    </NambarContext.Provider>
    </>
  );
}

export default App;
