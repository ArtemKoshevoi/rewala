import { Epic } from 'redux-observable';
import { Observable } from 'rxjs';
import { Action } from 'typesafe-actions';
import { CountriesConfigValues } from '../../../shared/interfaces/countriesConfigValues';
import { asyncActionHandlerFactory } from '../../utils/async-action-helper';
import { countriesConfigRequestService } from '../service';

const {
  effect,
  reducer,
  ActionTypes,
  Actions,
} = asyncActionHandlerFactory<undefined, CountriesConfigValues, Error>('GET_CONFIG_REQUEST');

const epic: Epic = (actions$: Observable<Action>) => effect(
  actions$,
  () => countriesConfigRequestService.getConfig(),
);

export { epic, reducer, Actions, ActionTypes };