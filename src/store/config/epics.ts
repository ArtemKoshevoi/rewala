import { Epic, ofType } from 'redux-observable';
import { map } from 'rxjs/operators';
import { PayloadAction } from 'typesafe-actions';
import { CountriesConfigValues } from '../../shared/interfaces/countriesConfigValues';

import { Actions as CountriesConfigRequestActions, ActionTypes as CountriesConfigRequestActionTypes} from '../config-request';
import { transferActionEpicFactory } from '../utils/transfer-action';
import { Actions, ActionTypes } from './actions';

export const getConfigEpic: Epic = (action$) => action$.pipe(
  ofType(ActionTypes.GET_CONFIG),
  map((action: PayloadAction<ActionTypes.GET_CONFIG, CountriesConfigValues>) => action.payload),
  map(() => CountriesConfigRequestActions.getConfig.action()),
);

export const loginSucceededEpic: Epic = transferActionEpicFactory (
  CountriesConfigRequestActionTypes.getConfigActionTypes.ACTION_SUCCEEDED,
  Actions.getConfigSucceded,
);

export const epics = [
  getConfigEpic,
  loginSucceededEpic,
];