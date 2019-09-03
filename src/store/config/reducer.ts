import { ActionTypes, ActionTypeUnion } from './actions';
import { CountriesConfig } from './state';

const initialState: CountriesConfig = {
  countries: [],
};

export function reducer(state = initialState, action: ActionTypeUnion): CountriesConfig {
  switch (action.type) {

    case ActionTypes.GET_CONFIG_SUCCEDED: {
      const {countries} = action.payload;

      return {
        ...state,
        countries,
      };
    }

    default:
      return state;
  }
}