import React, {createContext, useEffect, useReducer} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LoginData, LoginResponse, Usuario} from '../interfaces/appInterfaces';
import {AuthReducer, AuthState} from './AuthReducer';
import cafeApi from '../api/cafeApi';

type AuthContextProps = {
  errorMessage: string;
  token: string | null;
  user: Usuario | null;
  status: 'checking' | 'authenticated' | 'not-authenticated';
  signUp: () => void;
  signIn: (loginData: LoginData) => void;
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

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    const token = await AsyncStorage.getItem('token');
    if (!token) return dispatch({type: 'notAuthenticated'});

    const resp = await cafeApi('/auth');

    if (resp.status !== 200) return dispatch({type: 'notAuthenticated'});

    dispatch({
      type: 'signUp',
      payload: {token: resp.data.token, user: resp.data.usuario},
    });
  };

  const signUp = () => {};
  const signIn = async ({correo, password}: LoginData) => {
    try {
      const {data} = await cafeApi.post<LoginResponse>('/auth/login', {
        correo,
        password,
      });
      dispatch({
        type: 'signUp',
        payload: {token: data.token, user: data.usuario},
      });
      await AsyncStorage.setItem('token', data.token);
    } catch (error: any) {
      dispatch({
        type: 'addError',
        payload: error.response.data.msg || 'información incorrecta',
      });
    }
  };
  const removeError = () => {
    dispatch({type: 'removeError'});
  };
  const logOut = () => {};

  return (
    <AuthContext.Provider
      value={{...state, signIn, signUp, removeError, logOut}}>
      {children}
    </AuthContext.Provider>
  );
};
