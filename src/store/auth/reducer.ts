import { ActionTypes, ActionTypeUnion } from './actions';
import { AuthState } from './state';

const initialState: AuthState = {
  isAuthorized: null,
  token: null,
  authorizedUserId: null,
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
        authorizedUserId: null,
        token,
      };
    }

    case ActionTypes.GET_CURRENT_USER_SUCCEDED: {
      const {_id} = action.payload;
      return {
        ...state,
        authorizedUserId: _id,
        isAuthorized: true,
      };
    }

    case ActionTypes.LOGIN_FAILED: {
      return {
        ...state,
        isAuthorized: false,
      };
    }

    default:
      return state;
  }
}
