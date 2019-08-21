import { ActionTypes, ActionTypeUnion } from './actions';
import { AuthState } from './state';

const initialState: AuthState = {
  isAuthorized: null,
  token: null,
  error: null,
  wrongLoginPassword: false,
};

export function reducer(state = initialState, action: ActionTypeUnion): AuthState {
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

    case ActionTypes.LOGIN_FAILED: {
      return {
        ...state,
        isAuthorized: false,
        error: action.payload,
      };
    }

    default:
      return state;
  }
}
