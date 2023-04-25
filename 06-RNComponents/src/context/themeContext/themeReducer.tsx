import {Theme} from '@react-navigation/native';

type ThemeAction = {type: 'set_light_theme'} | {type: 'set_dark_theme'};

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark';
  dividerColor: string;
}

export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dark: false,
  colors: {
    primary: '#88389c',
    background: 'white',
    card: 'green',
    text: 'black',
    border: 'grey',
    notification: 'violet',
  },
  dividerColor: 'rgba(0,0,0,0.6)',
};

export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dark: true,
  colors: {
    primary: '#cb76dd',
    background: 'black',
    card: 'green',
    text: 'white',
    border: 'white',
    notification: 'white',
  },
  dividerColor: 'rgba(255,255,255,0.8)',
};
//funcion pura que recibe el state y una accion y devuelve algo del state

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case 'set_light_theme':
      return {...lightTheme};

    case 'set_dark_theme':
      return {...darkTheme};

    default:
      return state;
  }
};
