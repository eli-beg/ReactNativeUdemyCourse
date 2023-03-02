import {AuthState} from './AuthContext';

type AuthAction = {type: 'signIn'};

// siempre tiene que devolver el estado, asi que marco la restriccion con la interface
export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        username: 'no-username-yet',
      };

    default:
      return state;
  }
};
