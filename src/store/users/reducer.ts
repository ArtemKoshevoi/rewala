import { ActionTypes, ActionTypeUnion } from './actions';
import { UsersState } from './state';

const initialState: UsersState = {
  entities: {},
};

export function reducer(state = initialState, action: ActionTypeUnion): UsersState {
  switch (action.type) {

    case ActionTypes.SET_USER: {
      const users = action.payload;

      const entities = users.reduce((acc, user) => ({
        ...acc,
        [ user._id ]: user,
      }), state.entities);

      return {
        ...state,
        entities,
      };
    }

    case ActionTypes.REMOVE_USER: {
      return initialState;
    }

    default:
      return state;
  }
}
