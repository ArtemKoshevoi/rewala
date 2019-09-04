import { ActionTypes, ActionTypeUnion } from './actions';
import { UsersState } from './state';

const initialState: UsersState = {
  entities: {},
  ids: [],
  currentUserId: null,
};

export function reducer(state = initialState, action: ActionTypeUnion): UsersState {
  switch (action.type) {

    case ActionTypes.SET_USER: {
      const users = action.payload;

      const entities = users.reduce((acc, user) => ({
        ...acc,
        [user._id]: user,
      }), state.entities);

      const ids = Object.keys(entities);

      return {
        ...state,
        entities,
        ids,
      };
    }

    case ActionTypes.SET_CURRENT_USER_ID: {
      const currentUserId = action.payload;

      return {
        ...state,
        currentUserId,
      };
    }

    case ActionTypes.REMOVE_USER: {
      let {currentUserId} = action.payload;

      const entities = {
        ...state.entities,
      };
      delete entities[currentUserId];

      const ids = state.ids.filter((id) => id !== currentUserId);
      currentUserId = null;
      return {
        ...state,
        entities,
        ids,
        currentUserId,
      };
    }

    default:
      return state;
  }
}
