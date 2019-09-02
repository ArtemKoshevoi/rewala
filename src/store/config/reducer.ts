import { ActionTypes, ActionTypeUnion } from './actions';
import { CountriesConfig } from './state';

const initialState: CountriesConfig = {
  entities: {},
};

export function reducer(state = initialState, action: ActionTypeUnion): CountriesConfig {
  switch (action.type) {

    case ActionTypes.GET_CONFIG_SUCCEDED: {
      const data = action.payload;
      // const {countries} = data;
      // console.log(countries);

      // const entities = data.countries.reduce((acc, country) => ({
      //   ...acc,
      //   [ country._id ]: country,
      // }), state.entities);

      return {
        ...state,
        // entities,
      };
    }

    default:
      return state;
  }
}