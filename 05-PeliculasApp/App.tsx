import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './src/navigation/Navigation';
import {GradientProvider} from './src/context/GradientContext';
// import {FadeScreen} from './src/screens/FadeScreen';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigation />
        {/* <FadeScreen /> */}
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({children}: any) => {
  return <GradientProvider>{children}</GradientProvider>;
};

export default App;
