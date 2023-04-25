import React, {createContext, useReducer, useEffect} from 'react';
import {useColorScheme, AppState, Appearance} from 'react-native';
import {ThemeState, darkTheme, lightTheme, themeReducer} from './themeReducer';

//creo una interface para definir props que el createContext va a exponer

interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

//como quiero que se vea la info que voy a exponer a la aplicacion
export const ThemeContext = createContext({} as ThemeContextProps);

//proveedor del contexto

export const ThemeProvider = ({children}: any) => {
  const colorScheme = useColorScheme();
  const [theme, dispatch] = useReducer(
    themeReducer,
    colorScheme === 'dark' ? darkTheme : lightTheme,
  );

  useEffect(() => {
    AppState.addEventListener('change', status => {
      if (status === 'active') {
        Appearance.getColorScheme() === 'light'
          ? setLightTheme()
          : setDarkTheme();
      }
    });
  }, []);

  const setDarkTheme = () => {
    dispatch({type: 'set_dark_theme'});
    console.log('set dark theme');
  };
  const setLightTheme = () => {
    dispatch({type: 'set_light_theme'});
    console.log('set light hteme');
  };

  return (
    <ThemeContext.Provider
      value={{
        setDarkTheme,
        setLightTheme,
        theme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
