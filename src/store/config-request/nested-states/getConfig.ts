import { Epic } from 'redux-observable';
import { Observable } from 'rxjs';
import { Action } from 'typesafe-actions';
import { Countries } from '../../../shared/interfaces/countries';
import { asyncActionHandlerFactory } from '../../utils/async-action-helper';
import { countriesConfigRequestService } from '../service';

const {
  effect,
  reducer,
  ActionTypes,
  Actions,
} = asyncActionHandlerFactory<undefined, Countries, Error>('GET_CONFIG_REQUEST');

const epic: Epic = (actions$: Observable<Action>) => effect(
  actions$,
  () => countriesConfigRequestService.getConfig(),
);

export { epic, reducer, Actions, ActionTypes };