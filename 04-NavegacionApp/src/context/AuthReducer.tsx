import {AuthState} from './AuthContext';

type AuthAction =
  | {type: 'signIn'}
  | {type: 'signOut'}
  | {type: 'changeUser'; payload: string}
  | {type: 'changeFavoriteIcon'; payload: string};

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
    case 'signOut':
      return {
        ...state,
        isLoggedIn: false,
        username: undefined,
        favoriteIcon: undefined,
      };
    case 'changeFavoriteIcon':
      return {
        ...state,
        favoriteIcon: action.payload,
      };
    case 'changeUser':
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
};
