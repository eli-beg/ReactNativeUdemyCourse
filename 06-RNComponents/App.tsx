import 'react-native-gesture-handler';
import React from 'react';

import Navigation from './src/navigation/Navigation';
import {ThemeProvider} from './src/context/themeContext/ThemeContext';

const App = () => {
  return (
    <AppState>
      <Navigation />
    </AppState>
  );
};

//creo un high order component para establecer los proveedores de contexto
const AppState = ({children}: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default App;
