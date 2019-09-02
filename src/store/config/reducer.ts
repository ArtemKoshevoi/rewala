import { ActionTypes, ActionTypeUnion } from './actions';
import { CountriesConfig } from './state';

const initialState: CountriesConfig = {
  entities: {},
};

export function reducer(state = initialState, action: ActionTypeUnion): CountriesConfig {
  switch (action.type) {

    case ActionTypes.GET_CONFIG: {
      console.log(111);

      return {
        ...state,
      };
    }

    default:
      return state;
  }
}