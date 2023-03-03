//definir que informacion tendre aqui

import React, {createContext, useReducer} from 'react';
import {authReducer} from './AuthReducer';

export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

// Estado Inicial

export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined,
};

//definir lo que va a transmitir el contexto, usaremos la interfase para decirle a React como luce y que expone el context

export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  signOut: () => void;
  changeFavoriteIcon: (iconName: string) => void;
  changeUser: (userName: string) => void;
}

//crear contexto

export const AuthContext = createContext({} as AuthContextProps);

//exponer el proveedor del estado

export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({type: 'signIn'});
  };

  const signOut = () => {
    dispatch({type: 'signOut'});
  };

  const changeFavoriteIcon = (iconName: string) => {
    dispatch({type: 'changeFavoriteIcon', payload: iconName});
  };
  const changeUser = (userName: string) => {
    dispatch({type: 'changeUser', payload: userName});
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        signOut,
        changeFavoriteIcon,
        changeUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
