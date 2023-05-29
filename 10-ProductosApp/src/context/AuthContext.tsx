import React, {createContext, useReducer} from 'react';
import {Usuario} from '../interfaces/appInterfaces';
import {AuthReducer, AuthState} from './AuthReducer';

type AuthContextProps = {
  errorMessage: string;
  token: string | null;
  user: Usuario | null;
  status: 'checking' | 'authenticated' | 'not-authenticated';
  signUp: () => void;
  signIn: () => void;
  removeError: () => void;
  logOut: () => void;
};

const authInitialState: AuthState = {
  status: 'checking',
  token: null,
  user: null,
  errorMessage: '',
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(AuthReducer, authInitialState);

  const signUp = () => {};
  const signIn = () => {};
  const removeError = () => {};
  const logOut = () => {};

  return (
    <AuthContext.Provider
      value={{...state, signIn, signUp, removeError, logOut}}>
      {children}
    </AuthContext.Provider>
  );
};
