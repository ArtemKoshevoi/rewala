import { Epic, ofType } from 'redux-observable';
import { map, tap } from 'rxjs/operators';
import { PayloadAction } from 'typesafe-actions';
import { CountriesConfigValues } from '../../shared/interfaces/countriesConfigValues';

import { Actions as CountriesConfigRequestActions } from '../config-request';
import { ActionTypes } from './actions';

export const getConfigEpic: Epic = (action$) => action$.pipe(
  ofType(ActionTypes.GET_CONFIG),
  map((action: PayloadAction<ActionTypes.GET_CONFIG, CountriesConfigValues>) => action.payload),
  map(() => CountriesConfigRequestActions.getConfig.action()),
);



export const epics = [
  getConfigEpic,
];