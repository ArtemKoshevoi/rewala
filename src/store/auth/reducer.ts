import { AuthState } from './state';
import { ActionTypes } from './actions';

const initialState: AuthState = {
  isAuthorized: null,
  token: null,
};

export function reducer(state = initialState, action: any): AuthState {
  switch (action.type) {
    case ActionTypes.SET_ACCESS_TOKEN: {
      const token = action.payload || null;

      if (token) {
        return {
          ...state,
          token,
          isAuthorized: true,
        };
      }

      return {
        ...state,
        isAuthorized: false,
        token,
      };
    }

    case ActionTypes.SET_IS_AUTHORIZED: {
      return {
        ...state,
        isAuthorized: true,
      };
    }

    case ActionTypes.RESET_IS_AUTHORIZED: {
      return {
        ...state,
        isAuthorized: false,
      };
    }

    default:
      return state;
  }
}
